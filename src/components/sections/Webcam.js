import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Webcam from "react-webcam";
import Image from '../elements/Image';
import Modal from '../elements/Modal';
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
            // console.log(message);
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
        // setCapturedImg(capturedImg);
        // console.log(capturedImg);
        sendMessage(capturedImg);
    }, [webcamRef]);

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
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width="100%"
                                videoConstraints={videoConstraints}
                            />
                            <p>
                                <button onClick={capture}>Capture photo</button>
                            </p>
                            {capturedImg && <img src={capturedImg} width="50%" />}

                            <p>
                                <h3>{prediction && prediction}</h3>
                            </p>
                        </div>}
                </div>
            </div>
        </section >
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;