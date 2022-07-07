import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import logo_img from '../../../assets/images/Logo.png';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={logo_img}
            alt="Open"
            width={100}
            height={200} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;