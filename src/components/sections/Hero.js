import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200">
              Welcome to your <span className="text-color-primary">WASTE DETECTIVE</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Separate you garbage right and easy...
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="500">
                <ButtonGroup>
                  <Button tag="a" color="secondary" wideMobile>
                    <Link to="/workflow">
                      Get Started
                    </Link>
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="https://git.scc.kit.edu/uerib/waste-detective.git">
                    View on GitLab
                  </Button>

                </ButtonGroup>
              </div>

            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="400">
            <Image
              src={require('../../assets/images/Hero_Garbage_Bins.png')}
              alt="Hero"
              width={896}
              height={504} />
          </div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;