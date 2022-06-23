import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const upload = async () => {
        await fetch('/api/uploadMessage', {
            method: 'POST',
            body: JSON.stringify({
              message: e.target.value
          })
        }).then(resp => {
            resp.json().then(data => {
                console.log(data);
                if (data.success) {
                  console.log('True');
                } else {
                    console.log('FILE UPLOAD FAILED');
                }
            });

        })
    };
    upload();
}

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const sectionHeader = {
    title: 'Contact us',
    paragraph: 'Please reach out to us, if you need support.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
      <SectionHeader data={sectionHeader} className="center-content" />
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              You want to get in touch with us?
              </h3>
          </div>

          <form onSubmit={handleSubmit} className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
            <div className="form-inline justify-content-center mt-5">
              <div className="cta-action">
                
                <Input id="newsletter" type="text" name="file" label="Subscribe" labelHidden hasIcon="right" placeholder="Your meessage">
                  <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="primary" />
                  </svg>
                </Input>

              </div>
            </div>

            <div className="input-group justify-content-center mt-4">
              <Button type="submit" color="dark" wideMobile >Submit Mail</Button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;