import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Webcam from "react-webcam";
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Button from '../elements/Button';
import SectionHeader from './partials/SectionHeader';
import * as Loader from 'react-loader-spinner';
import styled from "styled-components";
import config from "../../config/config";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Viewer = ({
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
    const [capturedImg, setCapturedImg] = useState(null);
    const [prediction, setPrediction] = useState("");
    const [isPaused, setPause] = useState(false);
    const ws = useRef(null);

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

    useEffect(() => {
        const client_id = Date.now();
        const url = `${config.WS_SERVER}/${client_id}`;
        console.log(url);
        ws.current = new WebSocket(url);
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        return () => {
            ws.current.close();
        };
    }, []);

    useEffect(() => {
        if (!ws.current) return;

        ws.current.onmessage = (event) => {
            if (isPaused) return;
            const message = JSON.parse(event.data);
            console.log(message);
            setCapturedImg(message.output);
            setPrediction(message.prediction);
        };
    }, [isPaused]);

    function sendMessage(msg) {
        if (!ws.current) return;

        ws.current.send(msg);
    }

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "environment", // Can be "environment" or "user"
    };

    const capture = useCallback(() => {
        const capturedImg = webcamRef.current.getScreenshot();
        setCapturedImg(capturedImg);
        //console.log(capturedImg);
        sendMessage(capturedImg);
    }, [webcamRef]);

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container" style={{ alignItems: 'center' }}>
                <div className={innerClasses} style={{ "paddingTop": "20px", "paddingBottom": "10px", alignItems: 'center' }}>
                    {isPaused ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div className={tilesClasses}>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Webcam
                                                audio={false}
                                                ref={webcamRef}
                                                screenshotFormat="image/jpeg"
                                                width="100%"
                                                videoConstraints={videoConstraints}
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Webcam
                                        </h4>
                                        <Button onClick={capture} color='dark'>Capture photo</Button>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            {capturedImg && <img src={capturedImg} width="100%" />}
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Prediction
                                        </h4>
                                        <h3>{prediction && prediction}</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                </div>
            </div>

        </section >
    );
};

Viewer.propTypes = propTypes;
Viewer.defaultProps = defaultProps;

export default Viewer;