import React, {useState}from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import * as Loader from 'react-loader-spinner';
import Checkbox from '../elements/Checkbox';
import { DropdownDate} from "react-dropdown-date";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const FileUploader = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    running,
    setRunning,
    setNodes,
    setEdges,
    setOptions,
    get_nodes,
    flyer,
    setFlyer,
    ...props
}) => {
    const [gndChecked, setGndChecked] = useState(true)
    const [date, setDate] = useState()

    const formatDate = (date) => {
        // formats a JS date to 'yyyy-mm-dd'
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    };


    const handleDate = (e) => {
        const upload = async (e) => {
            await fetch('/api/uploadDate', {
                method: 'POST',
                body: JSON.stringify({
                    date: e
                })
            }).then(resp => {
                resp.json().then(data => {
                    if (data.success) {
                        console.log(data);
                    } else {
                        console.log('DATE UPLOAD FAILED');
                    }
                });

            })
        };
        upload(e);
    }

    const handleGND = () => {
        setGndChecked(!gndChecked)

        const upload = async () => {
            await fetch('/api/uploadGnd', {
                method: 'POST',
                body: JSON.stringify({
                    gnd: gndChecked
                })
            }).then(resp => {
                resp.json().then(data => {
                    if (data.success) {
                        console.log(data);
                    } else {
                        console.log('GND UPLOAD FAILED');
                    }
                });

            })
        };
        upload();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        setFlyer(URL.createObjectURL(formData.get('file')));

        const upload = async () => {
            await fetch('/api/uploadImage', {
                method: 'POST',
                body: formData
            }).then(resp => {
                resp.json().then(data => {
                    console.log(data);
                    if (data.success) {
                        setRunning(true);
                        handleWorkflow();
                    } else {
                        console.log('FILE UPLOAD FAILED');
                    }
                });

            })
        };
        upload();
    }

    const handleWorkflow = (n) => {
        const startWorkflow = async () => {
            await fetch('/api/startWorkflow', {
                method: 'POST'
            }).then(resp => {
                resp.json().then(data => {
                    console.log(data);
                    if (data.success) {
                        setRunning(false);
                        setNodes(get_nodes(data.nodes, flyer));
                        setEdges(data.edges);
                        //setOptions(data.options);
                    } else {
                        console.log('WORKFLOW NOT RUNNING');
                    }
                });

            })
        };
        startWorkflow();
    }

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        'push-left'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses} style={{ "paddingBottom": 0 }}>
                    <h1 className="mt-0 mb-16 reveal-from-bottom">
                        Start your <span className="text-color-primary">Workflow</span>
                    </h1>
                    <div className="container-xs">
                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                            Upload a flyer of your choice.
                        </p>
                    </div>

                    {running ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div className={tilesClasses}>
                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">

                                    <div className="features-tiles-item-header">
                                        <Checkbox onChange={handleGND}>GND</Checkbox>
                                    </div>

                                    <div className="features-tiles-item-header">
                                        <Checkbox onChange={()=> console.log('Zeitungsarchiv')}>Zeitungsarchiv</Checkbox>
                                    </div>

                                    <div className="features-tiles-item-header">
                                        <Checkbox onChange={()=> console.log('Qurator')}>Qurator</Checkbox>
                                    </div>

                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <DropdownDate
                                            startDate={"1800-01-01"}
                                            endDate={"1945-12-31"}
                                            selectedDate={date}
                                            defaultValues={
                                                {
                                                    year: 'select year',
                                                    month: 'select month',
                                                    day: 'select day'
                                                }
                                            }
                                            onDateChange={(e) => {
                                                console.log(e);
                                                setDate(formatDate(e));
                                                handleDate(formatDate(e))
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='input-group'>
                                        <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
                                            <div className="form-inline justify-content-center mt-5">
                                                <div className="input-group">
                                                    <Input type="file" id="image" name="file" placeholder="Drag your File here"
                                                        accept="image/*" className="file-custom" hasIcon='right'
                                                        style={{ height: '52px', width: '900px' }} />
                                                </div>
                                            </div>
                                            <div className="input-group justify-content-center mt-4">
                                                <Button type="submit" color="primary" wideMobile >SHOW ANZEIGER</Button>
                                            </div>
                                        </form>
                                    </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

FileUploader.propTypes = propTypes;
FileUploader.defaultProps = defaultProps;

export default FileUploader;