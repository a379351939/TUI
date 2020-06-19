import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';
import Icon from '../icon';
import Wave from '../wave';

export interface ButtonProps {
  onClick?: React.MouseEventHandler
  disable?: boolean
  type? : string
  loading? : boolean
}

class Index extends React.Component<ButtonProps> {
  public static defaultProps = {
    disable: false,
    type: 'default',
    loading: false
  };

  public static propsTypes = {
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'primary']),
    loading: PropTypes.bool
  };

  public render(){
    const { disable, children, type, loading, ...rest } = this.props;

    return (
      <Wave>
        <button className={classes('buttonShit', 'test', type)}  disabled={disable} {...rest}>
          {loading && <Icon className='loading' />}
          {children}
        </button>
      </Wave>
    )
  }
}

export default Index;