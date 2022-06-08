import React, { } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';
import * as Loader from 'react-loader-spinner';

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
    running,
    setRunning,
    setNodes,
    setEdges,
    setOptions,
    ...props
}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);

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

    const handleWorkflow = () => {
        const startWorkflow = async () => {
            await fetch('/api/startWorkflow', {
                method: 'POST'
            }).then(resp => {
                resp.json().then(data => {
                    console.log(data);
                    data.success ? setRunning(false) : console.log('WORKFLOW NOT RUNNING');
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


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <h1 className="mt-0 mb-16 reveal-from-bottom"
                        data-reveal-delay="200">
                        Start your <span className="text-color-primary">Workflow</span>
                    </h1>
                    <div className="container-xs">
                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                            Upload a flyer of your choice.
                        </p>
                    </div>

                    {running ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div> 
                        :
                        <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
                            <div className="form-inline justify-content-center mt-5">
                                <div className="input-group">
                                    <Input type="file" id="image" name="file" placeholder="Drag your File here"
                                        accept="image/*" className="file-custom" hasIcon='right'
                                        style={{ height: '52px', width: '900px' }} />
                                </div>
                            </div>
                            <div className="input-group justify-content-center mt-4">
                                <Button type="submit" color="dark" wideMobile >START</Button>
                            </div>
                        </form>
                    }

    
                </div>
            </div>
        </section>
    );
}

FileUploader.propTypes = propTypes;
FileUploader.defaultProps = defaultProps;

export default FileUploader;