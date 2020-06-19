import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export interface AffixProps {
  distance?: number
}

const Affix: React.FunctionComponent<AffixProps> = ({distance, children}) => {
  // const affix = useRef<HTMLDivElement>(null);

  // useEffect(()=> {
  //   const affixDom = affix.current;
  //   const handleScroll = () => {
  //     if(affixDom !== null) {
  //       // console.log(affixDom.getBoundingClientRect().top);
  //       // console.log(window.scrollY)
  //
  //       console.log(affixDom.getBoundingClientRect().top);
  //
  //       if(affixDom.getBoundingClientRect().top < 0) {
  //         affixDom.style.position = 'fixed';
  //         affixDom.style.top = '0px';
  //       }
  //     }
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // });

  return (
    <div className='affix'>
      {children}
    </div>
  )
};

Affix.propTypes = {
  distance: PropTypes.number
};


export default Affix;