import React, {useState }  from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import anzeiger_img from '../../assets/images/scan_examples/example_scan7.jpeg';
import leaflet_img from '../../assets/images/scan_examples/example_flyer3.jpeg';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const DaVinciHackathon = ({
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

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

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

  const sectionHeader = {
    title: 'Part of {COD1NG DA V1NC1}',
    paragraph: 'Culture-Hackathon Baden-Württemberg 2022'
  };

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className='features-tiles section'>
        <div className="container">
          <div className='features-tiles-inner section-inner pt-0'>
            <SectionHeader data={sectionHeader} className="center-content" />

            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">

                  <a href='https://codingdavinci.de/daten/deutscher-reichsanzeiger-und-preussischer-staatsanzeiger'>
                    <div className="features-tiles-item-header">
                      <h4 className="mt-0 mb-8">
                        historic newspaper
                      </h4>

                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={anzeiger_img}
                          alt="Features tile icon 01"
                          width={128}
                          height={128} />
                      </div>

                    </div>
                  </a>

                  <div className="features-tiles-item-content">
                    <p className="m-0 text-sm">
                      German 'Reichsanzeiger' and 'Preußischer Staatsanzeiger'.
                    </p>
                  </div>

                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">

                  <a href='https://codingdavinci.de/daten/flug-und-extrablaetter-aus-der-revolutionszeit-1918-bis-1920'>
                    <div className="features-tiles-item-header">
                      <h4 className="mt-0 mb-8">
                        leaflets
                      </h4>

                      <div className="features-tiles-item-image mb-16">
                        <Image
                          src={leaflet_img}
                          alt="Features tile icon 01"
                          width={128}
                          height={128} />
                      </div>

                    </div>
                  </a>

                  <div className="features-tiles-item-content">
                    <p className="m-0 text-sm">
                      Leaflets and extra sheets from the revolutionary period 1918 to 1920.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="500">
            <div
              data-video="https://www.youtube.com/embed/JPm0_xCM1kQ?autplay=1"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </div>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/JPm0_xCM1kQ?autplay=1"
            videoTag="iframe" />
        </div>
      </div>

    </section>
  );
}

DaVinciHackathon.propTypes = propTypes;
DaVinciHackathon.defaultProps = defaultProps;

export default DaVinciHackathon;