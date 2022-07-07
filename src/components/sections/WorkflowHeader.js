import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import * as Loader from 'react-loader-spinner';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const WorkflowHeader = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    pushLeft,
    running,
    setRunning,
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

    const tilesClasses = classNames(
        'tiles-wrap center-content',
        'push-left'
    );

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses} style={{ "paddingBottom": 0 }}>
                    <h1 className="mt-0 mb-16 reveal-from-bottom">
                        Separate your <span className="text-color-primary">waste</span>
                    </h1>
                    <div className="container-xs">
                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                            Place your waste item in front of the camera and obtain the right garbage bin.
                        </p>
                    </div>

                    {running ?
                        <div>
                            <Loader.ThreeDots color="dark" />
                        </div>
                        :
                        <div className={tilesClasses}>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

WorkflowHeader.propTypes = propTypes;
WorkflowHeader.defaultProps = defaultProps;

export default  WorkflowHeader;