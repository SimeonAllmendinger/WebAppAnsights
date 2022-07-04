import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Webcam from "react-webcam";
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import SectionHeader from './partials/SectionHeader';
import * as Loader from 'react-loader-spinner';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const KeywordGraph = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    running,
    setRunning,
    ...props
}) => {

    const webcamRef = useRef(null);

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

    const tilesClasses = classNames(
        'tiles-wrap center-content',
    );

    const videoConstraints = {
        facingMode: { exact: "environment" }
      };
    
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container" style={{ alignItems: 'center' }}>
                <div className={innerClasses} style={{ "paddingTop": "20px", "paddingBottom": "10px", alignItems: 'center' }}>
                    {running ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div>
                            <Webcam
                                audio={false}
                                height={720}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={1280}
                                videoConstraints={videoConstraints}
                                style={{ height: '800px', width: '100%' }}
                            />
                            <button onClick={capture}>Capture photo</button>
                        </div>}
                </div>
            </div>
        </section >
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;