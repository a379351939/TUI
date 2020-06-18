import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';
import '../utils/iconfont';

export interface IconProps {
  name?: string
  className?: string
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className={classes('icon', props.className)} aria-hidden="true">
      <use xlinkHref="#i-loading"/>
    </svg>
  )
};

Icon.defaultProps = {
  name: 'default'
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string
};

export default Icon;