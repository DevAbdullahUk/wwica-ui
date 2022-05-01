// import React from "react";

// class ScrollbarPosition extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             scrollPosition: 0
//         }

//         this.handleScroll = this.handleScroll.bind(this);
//     }


    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll)
    //   }
      
    //   componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll)
    //   }

 

    //   export const handleScroll = () => {

    //     console.log('hi');
    //     const winScroll =
    //       document.body.scrollTop || document.documentElement.scrollTop
      
    //     const height =
    //       document.documentElement.scrollHeight -
    //       document.documentElement.clientHeight
      
    //     const scrolled = winScroll / height
      

    //     console.log(scrolled);

    //     this.setState({
    //         scrollPosition: scrolled,
    //     })
    //   }

    // }

    // export default ScrollbarPosition;



//  import React, { useLayoutEffect, useState } from 'react';

// export default function useWindowPosition() {
//   const [scrollPosition, setPosition] = useState(0);
//   useLayoutEffect(() => {
//     function updatePosition() {
//       setPosition(window.pageYOffset);
//     }
//     window.addEventListener('scroll', updatePosition);
//     updatePosition();
//     return () => window.removeEventListener('scroll', updatePosition);
//   }, []);
//   return scrollPosition;
// }