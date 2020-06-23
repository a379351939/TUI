import React, {useEffect, useRef} from 'react';

export interface unFoldProps {
  visible: boolean
}

const UnFold: React.FunctionComponent<unFoldProps> = ({visible, children}) => {
  const thisRef = useRef<HTMLDivElement>(null);

  const expandControl = (element, visible) => {
    let sectionHeight = element.scrollHeight;
    if(visible) {
      element.style.height = sectionHeight + 'px';
    }else {
      element.style.height = 0 + 'px';
    }
  };

  useEffect(()=>{
    const element = thisRef.current;
    if(element !== null) {
      expandControl(element, visible);
    }
  },[visible]);

  return (
    <div ref={thisRef} style={{transition: "height 0.3s ease-out", overflow:"hidden"}}>
      {children}
    </div>
  )
};
export default UnFold