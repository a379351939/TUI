import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

export interface pagerProps {
  total: number
  onChange?: (current: number)=>any
}

export interface pagerState {
  current: number
}



class Index extends React.Component<pagerProps, pagerState> {
  public static defaultProps = {};
  public static propTypes = {
    total: PropTypes.number,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 1
    }
  }

  public countPage(): Array<any> {
    const {current} = this.state;
    const {total} = this.props;

    const arr:Array<any> = [];

    if(current - 1 > 4 && total - current > 4){
      return [
        1, `${current - 3}` ,current - 2,current - 1,current, current + 1, current + 2, `${current + 3}`,total
      ]
    } else if(current - 1 > 4){
      arr.push(1);
      arr.push(`${total - 7}`);
      for(let i:number = total - 6 ; arr.length < 9;i++) {
        arr.push(i)
      }
      return arr;
    } else if (total - current > 4) {
      for(let i:number = 1; arr.length < 7; i++){
        arr.push(i)
      }
      arr.push(`${arr[arr.length - 1] + 1}`);
      arr.push(total);
      return arr
    }

    for(let i:number = 1; i <=total; i++) {
      arr.push(i);
    }

    return arr;
  }

  public handleClickNum(num:number){
    this.setState({current: num})
  }

  public handleClickArrow(index:number){
    this.setState(({current})=>{
      return {current: current + index}
    })
  }

  public render() {
    const {current} = this.state;
    return (
      <>
        <Button disable={this.state.current <= 1} onClick={()=>{this.handleClickArrow(-1)}}><Icon name='left'/></Button>
        {
         [
           this.countPage().map(
             e => typeof e === 'string' ?
               <Button key={+e} className={current === +e ? 'active': ''} onClick={()=>{this.handleClickNum(+e)}} >...</Button> :
               <Button key={e} className={current === e ? 'active': ''} onClick={()=>{this.handleClickNum(e)}} >{e}</Button>

           )
         ]
        }
        <Button disable={current >= this.props.total} onClick={()=>{this.handleClickArrow(1)}}><Icon name='right'/></Button>
      </>
    )
  }
}

export default Index