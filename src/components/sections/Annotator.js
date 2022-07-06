import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Webcam from "react-webcam";
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import SectionHeader from './partials/SectionHeader';
import * as Loader from 'react-loader-spinner'
import ReactImageAnnotate from "react-image-annotate";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Annotator = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'keywordGraph-outer section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'keywordGraph-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );
   
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <ReactImageAnnotate
                labelImages
                regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
                regionTagList={["tag1", "tag2", "tag3"]}
                images={[
                    {
                        src: "https://placekitten.com/408/287",
                        name: "Image 1",
                        regions: []
                    }
                ]}
            />

        </section >
    );
};

Annotator.propTypes = propTypes;
Annotator.defaultProps = defaultProps;

export default Annotator;