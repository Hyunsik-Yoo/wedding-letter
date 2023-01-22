import React, { Component } from "react";
import Lottie from 'react-lottie';

import chairImage from '../resource/chair.png';
import heartImage from '../resource/heart.png';
import * as animationData from '../resource/heart.json'

class ChairView extends Component {
    render() {
        return (
            <div id='chair-container' style={{
                marginLeft: 30,
                marginRight: 30,
                marginTop: 69,
                position: 'relative'
            }}>
                <img src={chairImage} alt="Chair image" style={{
                    maxWidth: '100%'
                }} />

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    margin: 0,
                    paddingLeft: 8,
                    paddingTop: 2,
                    paddingRight: 8,
                    paddingBottom: 2,
                    textAlign: 'left',
                    color: '#FFFFFF',
                    lineHeight: '20px',
                    backgroundColor: 'rgba(146, 124, 104, 0.88)',
                    display: 'inline-block',
                    position: 'absolute',
                    left: 16,
                    top: 33
                }}>
                    예쁜 예감이 들었다.
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    margin: 0,
                    paddingLeft: 8,
                    paddingTop: 2,
                    paddingRight: 8,
                    paddingBottom: 2,
                    textAlign: 'left',
                    color: '#FFFFFF',
                    lineHeight: '20px',
                    backgroundColor: 'rgba(146, 124, 104, 0.88)',
                    display: 'inline-block',
                    position: 'absolute',
                    left: 16,
                    top: 57
                }}>
                    우리는 언제나 손을 잡고 있게 될 것이다.
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    margin: 0,
                    paddingLeft: 8,
                    paddingTop: 2,
                    paddingRight: 8,
                    paddingBottom: 2,
                    textAlign: 'left',
                    color: '#FFFFFF',
                    lineHeight: '20px',
                    backgroundColor: 'rgba(146, 124, 104, 0.88)',
                    display: 'inline-block',
                    position: 'absolute',
                    left: 16,
                    top: 91
                }}>
                    -이이체, 연인 中-
                </p>

                <div style={{
                    border: '1px solid #FFFFFF',
                    position: 'absolute',
                    borderRadius: 10,
                    left: 16,
                    right: 16,
                    bottom: 16,
                    top: 153
                }} />

                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationData,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                        }
                    }}
                    height={'25%'}
                    width={'25%'}
                    style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 50
                    }}
                />

                <img src={heartImage} alt="Heart image" style={{
                    width: 32,
                    height: 32,
                    position: 'absolute',
                    right: 36,
                    bottom: 32
                }} />
            </div>
        );
    }
}

export default ChairView