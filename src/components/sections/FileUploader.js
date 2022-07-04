import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import * as Loader from 'react-loader-spinner';
import Checkbox from '../elements/Checkbox';
//import { DropdownDate} from "react-dropdown-date";
import {Slider, Typography} from '@material-ui/core/';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
    ...props
}) => {
    const [annotation, setAnnotation] = useState(false)

    {/*const handleGND = () => {
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
                        handleWorkflow(URL.createObjectURL(formData.get('file')));
                    } else {
                        console.log('FILE UPLOAD FAILED');
                    }
                });

            })
        };
        upload();
    }

    const handleWorkflow = (current_flyer) => {
        const startWorkflow = async () => {
            await fetch('/api/startWorkflow', {
                method: 'POST'
            }).then(resp => {
                resp.json().then(data => {
                    console.log(data);
                    if (data.success) {
                        setRunning(false);
                        setNodes(get_nodes(data.nodes, current_flyer));
                        setEdges(data.edges);
                        //setOptions(data.options);
                    } else {
                        console.log('WORKFLOW NOT RUNNING');
                    }
                });

            })
        };
        startWorkflow();
    }**/}

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
                        Separate your <span className="text-color-primary">waste</span>
                    </h1>
                    <div className="container-xs">
                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                            Place your wate item in front of the camera and obtain the right garbage bin.
                        </p>
                    </div>

                    {running ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div className={tilesClasses}>

                            <div className='input-group'>
                                <form onSubmit={console.log('handleSubmit')} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
                                    <div className="input-group justify-content-center mt-4">
                                        <Button type="submit" color="primary" wideMobile >Annotate</Button>
                                    </div>
                                    <div className="form-inline justify-content-center mt-5">
                                        <div className="input-group">
                                            <Input type="file" id="image" name="image" placeholder="Drag your File here"
                                                accept="image/*" className="file-custom" hasIcon='right'
                                                style={{ height: '52px', width: '900px' }} />
                                        </div>
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