import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
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
    ...props
}) => {
    const container = useRef(null);

    const nodes = [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
      ];
    
    const edges = [
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 3 }
      ];
    
    const options = {};

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
    
    const sectionHeader = {
        title: 'Source Network'
      };

    useEffect(() => {
        const network =
            container.current &&
            new Network(container.current, { nodes, edges }, options);
    }, [container, nodes, edges]);

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                  <div ref={container} style={{ height: '400px', width: '900px' }} />
                  </div>
            </div>
        </section>
    );
};

KeywordGraph.propTypes = propTypes;
KeywordGraph.defaultProps = defaultProps;

export default KeywordGraph;