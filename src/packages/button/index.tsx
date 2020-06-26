import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';
import Icon from '../icon';

export interface ButtonProps {
  onClick?: React.MouseEventHandler
  disable?: boolean
  type? : string
  loading? : boolean
  iconName?: string
  className?: string
}

class Index extends React.Component<ButtonProps> {
  public static defaultProps = {
    disable: false,
    type: 'default',
    loading: false,
    iconName: ''
  };

  public static propTypes = {
    onClick: PropTypes.func,
    disable: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'primary']),
    loading: PropTypes.bool,
    iconName: PropTypes.string,
    className: PropTypes.string
  };

  public render(){
    const { disable, children, type, loading, iconName, className, ...rest } = this.props;

    return (
        <button className={classes('buttonShit', 'test', type, className)}  disabled={disable} {...rest}>
          {loading && <Icon className='loading' />}
          {iconName && <Icon name={iconName}/>}
          {children}
        </button>
    )
  }
}

export default Index;