import React, { useEffect, useRef } from 'react';
import './index.scss';

const Wave:React.FunctionComponent = ({children}) => {
  const node = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    const realNode = node.current;

    const aniStart = () => {
      if(realNode !== null) {
        realNode.className = 'wave-animation';
        realNode.addEventListener('animationend',aniEnd);
      }
    };

    const aniEnd = () => {
      if(realNode !== null) {
        realNode.className = "";
      }
    };

    if(realNode !== null) {
      realNode.addEventListener('click', aniStart)
    }

    return () => {
      if(realNode !== null) {
        realNode.removeEventListener('click', aniStart);
        realNode.removeEventListener('animationend',aniEnd);
      }
    }
  },[]);

  return (
    <span ref={node}>{children}</span>
  )
};

export default Wave;