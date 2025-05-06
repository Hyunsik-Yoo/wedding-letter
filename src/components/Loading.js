import React, { Component } from "react";
import Lottie from 'react-lottie';

import * as animationData from '../resource/loading.json'

class LoadingView extends Component {
    render() {
        return (
            <div id='loading' style={{
                backgroundColor: '#F2F2F2',
                maxWidth: '100%',
                height: '100vh',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                // overflow: 'hidden',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                  isClickToPauseDisabled={true}
                  height={'125px'}
                  width={'50px'}
                />
        
              </div>
        );
    }
}

export default LoadingView