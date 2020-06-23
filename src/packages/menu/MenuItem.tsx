import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';

interface MenuItemProps {
  uniqueKey?: string
  selectedKey?: string
  onClick?: (key:string | undefined) => any
  mode: 'vertical' | 'horizontal'
}

class MenuItem extends React.Component<MenuItemProps> {
  public static propTypes = {
    uniqueKey: PropTypes.string,
    onClick: PropTypes.func,
    mode: PropTypes.oneOf(['vertical', 'horizontal'])
  };

  public static defaultProps = {
    onClick: ()=>{},
    uniqueKey: '',
    mode: 'vertical'
  };

  public render(){
    const {children, onClick, uniqueKey, selectedKey, mode,  ...rest} = this.props;

    return (
      <li className={classes("menu-item", uniqueKey === selectedKey ? "active" : null,  mode )}
          onClick={()=>{
            if(onClick) {
              onClick(uniqueKey)
            }
          }}
          {...rest}
      >
        {children}
      </li>
    )
  }
}

export default MenuItem;