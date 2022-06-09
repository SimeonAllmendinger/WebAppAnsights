import React, { useEffect, useRef } from 'react';
import { Network, DataSet } from 'vis-network';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

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
                    var node = nodes[params.nodes[0]+1];
                    window.open(node.url, '_blank');
                }
              });
    }, [container, nodes, edges, options]);
    
    
    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                  <div ref={container} style={{ height: '800px', width: '100%' }} />
                  </div>
            </div>
        </section>
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;