import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import classes from '../utils/classes';
import Icon from '../icon';
import Unfold from '../comp/Unfold'

export interface SubMenuProps {
  selectedKey?: string
  onClick?: (key:string | undefined) => any
  mode: 'vertical' | 'horizontal'
  title: string
}

export interface SubMenuState {
  childrenVisible: boolean
}

class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
  public static propTypes = {
    uniqueKey: PropTypes.string,
    onClick: PropTypes.func,
    mode: PropTypes.oneOf(['vertical', 'horizontal']),
    title: PropTypes.string
  };

  public static defaultProps = {
    mode: 'vertical',
    title: ''
  };

  private readonly subRef: React.RefObject<HTMLUListElement>;

  constructor(props: SubMenuProps) {
    super(props);
    this.state = {
      childrenVisible: false
    };

    this.subRef = React.createRef()

  }

  public renderChildren = (children): Array<React.ReactElement> => {
    return React.Children.map(
      children,
      (child: React.ReactElement) => {
        return React.cloneElement(child, {
          onClick: this.props.onClick,
          uniqueKey: child.key,
          selectedKey: this.props.selectedKey,
          mode: this.props.mode
        })
      }
    )
  };

  public subClick = () => {
    this.setState((state)=>{
      return { childrenVisible: !state.childrenVisible }
    })
  };

  public render() {
    const { children, title, mode } = this.props;
    return (
      <li style={{position: 'relative'}}>
        <div className={classes("menu-item", mode)} onClick={this.subClick}>
          {title}
          <Icon name='down' className={classes("arrow", this.state.childrenVisible ? null : "hidden" )} />
        </div>
        <Unfold visible={this.state.childrenVisible}>
          <ul className={classes("submenu", this.state.childrenVisible ? null : "hidden", mode )}>
            {this.renderChildren(children)}
          </ul>
        </Unfold>
      </li>
    )
  }
}

export default SubMenu