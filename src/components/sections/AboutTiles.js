import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Team',
    paragraph: 'Open for suggestions at any time.'
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
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../assets/images/About/Simeon.jpg')}
                      alt="Emil"
                      height={60}
                      width={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Micha
                  </h4>
                  <p className="m-0 text-sm mb-8" >
                    ... (at) student.kit.edu
                  </p>
                  <p className="m-32 text-sm">
                    Data Analyst
                  </p>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../assets/images/About/Simeon.jpg')}
                      alt="Joel"
                      height={60}
                      width={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Daniel
                  </h4>
                  <p className="m-0 text-sm mb-8" >
                    ... (at) student.kit.edu
                  </p>
                  <p className="m-32 text-sm">
                    Data Analyst
                  </p>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../assets/images/About/Simeon.jpg')}
                      alt="Simeon"
                      height={60}
                      width={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 ">
                    Leon
                  </h4>
                  <p className="m-0 text-sm mb-8" >
                    ... (at) student.kit.edu
                  </p>
                  <p className="m-32 text-sm">
                    Software Engineer
                  </p>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../assets/images/About/Simeon.jpg')}
                      alt="Etienne"
                      height={60}
                      width={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 ">
                    Youxiang
                  </h4>
                  <p className="m-0 text-sm mb-8" >
                    ... (at) student.kit.edu
                  </p>
                  <p className="m-32 text-sm">
                    Data Scientist
                  </p>

                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('../../assets/images/About/Simeon.jpg')}
                      alt="Sasha"
                      height={60}
                      width={300} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 ">
                    Simeon
                  </h4>
                  <p className="m-0 text-sm mb-8" >
                    uerib (at) student.kit.edu
                  </p>
                  <p className="m-32 text-sm">
                    Software Architect
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;