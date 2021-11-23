import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    title: 'Meet the team',
    paragraph: '',
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

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — A Los Angeles based software engineer with fabulous hair and a passion for birding, bouldering, jazz.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ryan Lee</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://github.com/savoy1211/">Github</a>
                    <span> / </span>
                    <a href="https://www.linkedin.com/in/rynklee/">LinkedIn</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — A Seattle based software engineer with a passion for coffee, backpacking, and music.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Michael Pay</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <a href="https://github.com/airpick">Github</a>
                    <span> / </span>
                  <a href="https://www.linkedin.com/in/michael-edward-pay/">LinkedIn</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — A San Jose based software engineer with a passion for teaching, and mathematics.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Tu Pham</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <a href="https://github.com/toopham">Github</a>
                    <span> / </span>
                  <a href="https://www.linkedin.com/in/toopham/">LinkedIn</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — A Los Angeles based software engineer with a passion for photography, K-Pop and Formula 1 racing.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ian Tran</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <a href="https://github.com/eienTran/">Github</a>
                    <span> / </span>
                  <a href="https://www.linkedin.com/in/ictran/">LinkedIn</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — A Honolulu based software engineer with a passion for baking who mentored the bev development team.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Kai Rilliet</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                  <a href="https://github.com/kairilliet/">Github</a>
                    <span> / </span>
                  <a href="https://www.linkedin.com/in/kairilliet/">LinkedIn</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;