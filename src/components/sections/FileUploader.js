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
    setFile,
    ...props
}) => {

    const handleChange = (e) => {
        const [f] = e.target.files;
        setFile(f);
    };

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
                    <div className="file-uploader">
                        <Input
                            id="getFile"
                            type="file"
                            label="Upload your file here"
                            labelHidden
                            placeholder="Drag your File here"
                            setFile
                            onChange={handleChange} 
                            multiple={false} >
                        </Input>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

FileUploader.propTypes = propTypes;
FileUploader.defaultProps = defaultProps;

export default FileUploader;