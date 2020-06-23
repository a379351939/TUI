import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';

export interface MenuProps {
  onClick?: (key:string)=> any
  defaultSelectedKey?: string
  mode: 'vertical' | 'horizontal'
  style?: React.CSSProperties
}

export interface MenuState {
  selectedKey: string
}


class Menu extends React.Component<MenuProps, MenuState> {
  public static propTypes = {
    onClick: PropTypes.func,
    mode: PropTypes.oneOf(['vertical', 'horizontal'])
  };

  public static defaultProps = {
    mode: 'vertical'
  };

  constructor(props: MenuProps) {
    super(props);
    const { defaultSelectedKey } = props;
    this.state = {
      selectedKey: ('defaultSelectedKey' in props ? defaultSelectedKey : '') as string
    }

  }

  public renderChildren = (children): Array<React.ReactElement> => {
    return React.Children.map(
      children,
      (child: React.ReactElement) => {
        return React.cloneElement(child, {
          onClick: this.handleClick,
          uniqueKey: child.key,
          selectedKey: this.state.selectedKey,
          mode: this.props.mode
        })
      }
    )
  };

  public handleClick = (key:string) => {
    const { onClick } = this.props;
    this.setState({selectedKey: key}, () => {
      if(onClick) {
        onClick(key)
      }
    });
  };

  public render(){
    const { children, mode, style } = this.props;
    return (
      <ul className={classes("menu", mode)} style={style} >
        {this.renderChildren(children)}
      </ul>
    )
  }
}

export default Menu;