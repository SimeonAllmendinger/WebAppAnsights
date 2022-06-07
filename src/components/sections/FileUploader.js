import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

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
    setRunning,
    ...props
}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        
        const Upload = async() => {
          await fetch('/api/startWorkflow', {
            method: 'POST',
            body: formData
          }).then(resp => {
            resp.json().then(data => {console.log(data)})
          })
        }
        Upload();
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
                    {/*<div className="container">
                        <Input
                            id="getFile"
                            type="file"
                            name="file"
                            label="Upload your file here"
                            labelHidden
                            placeholder="Drag your File here"
                            setFile
                            onChange={handleChange}
                            multiple={false}
                            hasIcon='right'
                            style={{ height: '52px', width: '900px', fill: 'green' }}>
                        </Input>
    </div>**/}
                
                    <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" enctype="multipart/form-data">
                        <div className="form-inline justify-content-center mt-5">
                            <div className="input-group">
                                <Input type="file" id="image" name="file" placeholder="Drag your File here"
                                    accept="image/*" className="file-custom" hasIcon='right'
                                    style={{ height: '52px', width: '900px'}}/>
                            </div>
                        </div>

                        <div className="input-group justify-content-center mt-4">
                            <Button type="submit" color="dark" wideMobile >START</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

FileUploader.propTypes = propTypes;
FileUploader.defaultProps = defaultProps;

export default FileUploader;