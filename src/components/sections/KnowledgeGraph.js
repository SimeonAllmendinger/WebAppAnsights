import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import sparql_img from '../../assets/images/sparql.svg';
import github_img from '../../assets/images/Octicons-mark-github.svg';
import knowGraph_img from '../../assets/images/knowledgeGraphIcon.png';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const KnowledgeGraph = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Discover the leaflet database',
    paragraph: 'As part of the Da-Vinci Hacathon 2022 over 100 leaflets were made public. ' +
      'The application and implementation of Knowleedge Graphs helps to discover this database in order to' +
      'optimize its usage.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">

              <div className="features-tiles-item-header center-content">
                <a href="https://flyer-explorer.fiz-karlsruhe.de/sparql">
                  <div className="features-tiles-item-image mb-16 " >

                    <Image
                      src={sparql_img}
                      alt="sparql"
                      height={40}
                      width={200} />

                  </div>
                  <div className="features-tiles-item-header mb-16 center-content" >
                    <h4 className="mt-0 mb-8 center-content text-color-high">
                      Connect to sparql endpoint
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="features-tiles-item-content mb-16 center-content">
                <a href='https://flyer-explorer.fiz-karlsruhe.de/ontology'>
                  <div className="features-tiles-item-image mb-16 " >

                    <Image
                      src={knowGraph_img}
                      alt="Ontology"
                      height={40}
                      width={200} />

                  </div>
                  <div className="features-tiles-item-header mb-16 " >
                    <h4 className="mt-0 mb-8 center-content text-color-high">
                      Ontology Documentation
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="features-tiles-item-content mb-16 center-content">
                <a href='https://github.com/ISE-FIZKarlsruhe/flyer-explorer'>
                  <div className="features-tiles-item-image mb-16 " >

                    <Image
                      src={github_img}
                      alt="github"
                      height={40}
                      width={200} />

                  </div>
                  <div className="features-tiles-item-header">
                    <h4 className="mt-0 mb-8 center-content text-color-high">
                      View on Github
                    </h4>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

KnowledgeGraph.propTypes = propTypes;
KnowledgeGraph.defaultProps = defaultProps;

export default KnowledgeGraph;