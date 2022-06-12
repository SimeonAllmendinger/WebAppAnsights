import React, { useEffect, useRef, useState} from 'react';
import { Network} from 'vis-network';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses} style={{ "padding-top": "3px", "padding-bottom": "10px" }}>
                    <div ref={container} style={{ height: '800px', width: '100%' }} />
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
                    src={require('../../assets/images/scan_examples/example_flyer.jpeg')}
                    alt="Hero"
                    width={896}
                    height={504} />
            </Modal>
        </section >
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;