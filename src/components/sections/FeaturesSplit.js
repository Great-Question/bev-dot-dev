import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Built for devs',
    paragraph: 'Developed under tech accelerator, OS Labs, bev is a multi-platform desktop application that allows you to analyze and visualize dependencies. bev alleviates the pain of migrating to microservices.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            {/* First feature */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  A bird's eye view
                  </div>
                <h3 className="mt-0 mb-12">
                  Dependency Visualizer
                  </h3>
                <p className="m-0">
                bev parses through your project’s file structure to generate an interactive dependency graph. The blue nodes represent local dependencies whereas the red nodes represent third-party dependencies.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={'https://i.imgur.com/dmFFTVY.gif'}
                  alt="Features split 01"
                  width={1152}
                  height={650} />
              </div>
            </div>
            
            {/* Second feature */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  A smaller bundle
                  </div>
                <h3 className="mt-0 mb-12">
                  Bundle Optimizer
                  </h3>
                <p className="m-0">
                bev also finds and analyzes your bundle files. bev gives you a detailed breakdown of what’s being bundled.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://i.imgur.com/UDXgfVC.png"}
                  alt="Features split 02"
                  width={1200}
                  height={700} />
              </div>
            </div>

            {/* Second feature */}
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  See your bundle size change
                  </div>
                <h3 className="mt-0 mb-12">
                  Bundle Size History
                  </h3>
                <p className="m-0">
                bev keeps a history of how your bundle size over time.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={"https://i.imgur.com/jp8CSog.png"}
                  alt="Features split 02"
                  width={1200}
                  height={700} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;