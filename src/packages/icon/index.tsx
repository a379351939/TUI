import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';
import '../utils/iconfont';

export interface IconProps {
  name?: string
  className?: string
}

const Icon: React.FunctionComponent<IconProps> = ({name, className}) => {
  return (
    <svg className={classes('icon', className)} aria-hidden="true">
      <use xlinkHref={`#i-${name}`}/>
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