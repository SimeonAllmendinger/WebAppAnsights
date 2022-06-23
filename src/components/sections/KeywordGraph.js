import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
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
    nodes,
    edges,
    options,
    setNodes,
    setEdges,
    setOptions,
    running,
    setRunning,
    get_nodes,
    flyer,
    setFlyer,
    ...props
}) => {

    const container = useRef(null);
    const [flyerModalActive, setFlyermodalactive] = useState(false);


    const openModal = (e) => {
        e.preventDefault();
        setFlyermodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setFlyermodalactive(false);
    }

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

    useEffect(() => {

        const network =
            container.current &&
            new Network(container.current, { nodes, edges }, options);

        network.on("selectNode", function (params) {
            console.log("selectNode Event:", params);
            if (params.nodes.length === 1 && params.nodes[0] !== "KEY") {
                var node = nodes[params.nodes[0] + 1];
                window.open(node.url, '_blank');
            } if (params.nodes.length === 1 && params.nodes[0] === "KEY") {
                setFlyermodalactive(true)
            }
        });
    }, [container, nodes, edges, options]);

    const update_example = (i) => {
        setRunning(true)
        console.log('Example: ' + i);
        setFlyer(require('../../assets/images/scan_examples/example_flyer' + i + '.jpeg'))
        setNodes(get_nodes(require("../../assets/example_net/exampleNet" +
            i.toString() + "/nodes.json")["nodes"], flyer));
        setEdges(require("../../assets/example_net/exampleNet" +
            i.toString() + "/edges.json")["edges"]);
        setOptions(require("../../assets/example_net/exampleNet" +
            i.toString() + "/options.json"));
        setRunning(false)
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth'
        })
    }

    const tilesClasses = classNames(
        'tiles-wrap center-content',
    );

    const sectionHeader = {
        title: 'EXAMPLES',
        paragraph: 'Select an example to discover our tool.'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container" style={{ alignItems: 'center' }}>
                <div className={innerClasses} style={{ "paddingTop": "20px", "paddingBottom": "10px", alignItems: 'center' }}>
                    <div ref={container} style={{ height: '800px', width: '100%' }} />
                    <SectionHeader data={sectionHeader} className="center-content" style={{ "paddingTop": "50px", alignItems: 'center' }} data-reveal-delay="200" />

                    {running ?
                        <div>
                            console.log('No Example selection possible, since workflow is running')
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div className={tilesClasses}>
                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                onClick={() => { update_example(1) }}
                                                className='has-shadow'
                                                src={require('../../assets/images/scan_examples/example_flyer1.jpeg')}
                                                alt="Example1"
                                                width={150}
                                                height={150}
                                                max-height="100%" />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Aufruf Arbeiterstreik | 1918
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                onClick={() => update_example(2)}
                                                className='has-shadow'
                                                src={require('../../assets/images/scan_examples/example_flyer2.jpeg')}
                                                alt="Example2"
                                                width={150}
                                                height={150}
                                                max-height="100%"
                                            />
                                        </div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Example 2
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                                <div className="tiles-item-inner">
                                    <div className="features-tiles-item-header">
                                        <div className="features-tiles-item-image mb-16">
                                            <Image
                                                onClick={() => update_example(3)}
                                                className='has-shadow'
                                                src={require('../../assets/images/scan_examples/example_flyer3.jpeg')}
                                                alt="Example3"
                                                width={150}
                                                height={150}
                                                max-height="100%"
                                            /></div>
                                    </div>
                                    <div className="features-tiles-item-content">
                                        <h4 className="mt-0 mb-8">
                                            Example 3
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <p></p>
                        </div>}
                </div>
                <div
                    aria-controls="video-modal"
                    onClick={openModal}
                >
                </div>
            </div>
            <Modal
                id="video-modal"
                show={flyerModalActive}
                handleClose={closeModal}
                videoTag="iframe">
                <Image
                    className='has-shadow'
                    src={flyer}
                    alt="Flyer"
                    width={896}
                    height={504} />
            </Modal>
        </section >
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;