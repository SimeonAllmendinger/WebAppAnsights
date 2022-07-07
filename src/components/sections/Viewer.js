import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Webcam from "react-webcam";
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import * as Loader from 'react-loader-spinner';
import config from "../../config/config";

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

    // Webcam
    const webcamRef = useRef(null);
    const [capturedImg, setCapturedImg] = useState(null);
    const [submitImg, setSubmitImg] = useState(null);
    const [submitBool, setSubmitBool] = useState(false);
    const [prediction, setPrediction] = useState("");
    const [isPaused, setPause] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(true);
    const ws_predict = useRef(null);
    const ws_submit = useRef(null);

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
        const url_predict = `${config.WS_SERVER}/${client_id}`;
        const url_submit = `${config.WS_SUBMIT_SERVER}/${client_id}`;

        console.log(url_predict);
        console.log(url_submit);

        ws_predict.current = new WebSocket(url_predict);
        ws_submit.current = new WebSocket(url_submit);

        ws_predict.current.onopen = () => console.log("ws opened");
        ws_submit.current.onopen = () => console.log("ws opened");
        ws_predict.current.onclose = () => console.log("ws closed");
        ws_submit.current.onclose = () => console.log("ws closed");
       
        return () => {
            ws_predict.current.close();
            ws_submit.current.close();
        };
    }, []);

    useEffect(() => {
        if (!ws_predict.current) return;

        ws_predict.current.onmessage = (event) => {
            if (isPaused) return;
            const message = JSON.parse(event.data);
            console.log(message);
            setCapturedImg(message.output);
            setPrediction(message.prediction);
        };
    }, [isPaused]);

    useEffect(() => {
        if (!ws_submit.current) return;

        ws_submit.current.onmessage = (event) => {
            if (isPaused) return;
            const message = JSON.parse(event.data);
            console.log(message.status);
            setSubmitSuccess(JSON.parse(message.status).success);
        };
    }, [isPaused]);

    function sendMessage(msg) {
        if (!ws_predict.current) return;

        ws_predict.current.send(msg);
    }

    function sendSubmit(sub) {
        if (!ws_submit.current) return;

        ws_submit.current.send(sub);
    }

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "environment", // Can be "environment" or "user"
    };

    const capture = useCallback(() => {
        setSubmitBool(false)

        const capturedImg = webcamRef.current.getScreenshot();
        setCapturedImg(capturedImg);

        //console.log(capturedImg);
        sendMessage(capturedImg);
    }, [webcamRef]);

    const submit = useCallback(() => {
        setSubmitBool(true)
        
        const submitImg = webcamRef.current.getScreenshot();
        setSubmitImg(submitImg);

        //console.log(submitImg);
        sendSubmit(submitImg);
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
                                        <ButtonGroup>
                                        <Button onClick={capture} tag="a" color="secondary" wideMobile>Capture photo</Button>
                                        <Button onClick={submit} color='dark' wideMobile>Submit photo</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </div>

                            {submitBool ?
                                <div className="tiles-item reveal-from-bottom">
                                    <div className="tiles-item-inner">
                                        <div className="features-tiles-item-header">
                                            <div className="features-tiles-item-image mb-16">
                                                {submitImg && <img src={submitImg} width="100%" alt=''/>}
                                            </div>
                                        </div>
                                        <div className="features-tiles-item-content">
                                            <h4 className="mt-0 mb-8">
                                                Submission
                                            </h4>
                                            {submitSuccess ?
                                                <h3>Thanks for your support!</h3>
                                                :
                                                <div>
                                                    <h5>Something went wrong...   please try again!</h5>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="tiles-item reveal-from-bottom">
                                    <div className="tiles-item-inner">
                                        <div className="features-tiles-item-header">
                                            <div className="features-tiles-item-image mb-16">
                                                {capturedImg && <img src={capturedImg} width="100%" alt=''/>}
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
                            }
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