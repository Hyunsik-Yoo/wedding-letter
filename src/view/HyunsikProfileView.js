import React, { Component } from "react";

import HyunsikProfileImage from '../resource/hyunsik-profile.png';

class HyunsikProfileView extends Component {
    render() {
        return (
            <div style={{
                position: 'relative',
                marginTop: 46
              }}>
                <div style={{
                  width: '100%',
                  height: 237
                }}/>
                
                <img src={HyunsikProfileImage} alt="Hyunsik profile image" style={{
                  width: '50%',
                  position: 'absolute',
                  left: 30,
                  top: 0
                }} />
        
                <p style={{
                  fontFamily: 'Unbounded',
                  fontWeight: 600,
                  fontSize: 20,
                  margin: 0,
                  color: '#0F0F0F',
                  lineHeight: '32px',
                  position: 'absolute',
                  top: 85,
                  left: '60%'
                }}>
                  Hyunsik
                </p>
        
                <p style={{
                  fontFamily: 'Apple SD Gothic Neo',
                  fontWeight: 'bold',
                  fontSize: 14,
                  margin: 0,
                  color: '#000000',
                  lineHeight: '20px',
                  letterSpacing: '-1%',
                  position: 'absolute',
                  top: 131,
                  left: '55%',
                  backgroundColor: '#DFDEFF',
                  paddingLeft: 4,
                  paddingTop: 2,
                  paddingRight: 4,
                  paddingBottom: 2,
                }}>
                  #유현식
                </p>
        
                <p style={{
                  fontFamily: 'Apple SD Gothic Neo',
                  fontWeight: 'regular',
                  fontSize: 14,
                  margin: 0,
                  color: '#000000',
                  lineHeight: '20px',
                  letterSpacing: '-1%',
                  position: 'absolute',
                  top: 155,
                  left: '55%',
                  backgroundColor: '#DFDEFF',
                  paddingLeft: 4,
                  paddingTop: 2,
                  paddingRight: 4,
                  paddingBottom: 2
                }}>
                  #유광열,김옥분의 장남
                </p>
        
                <p style={{
                  fontFamily: 'Apple SD Gothic Neo',
                  fontWeight: 'regular',
                  fontSize: 14,
                  margin: 0,
                  color: '#000000',
                  lineHeight: '20px',
                  letterSpacing: '-1%',
                  position: 'absolute',
                  top: 179,
                  left: '55%',
                  backgroundColor: '#DFDEFF',
                  paddingLeft: 4,
                  paddingTop: 2,
                  paddingRight: 4,
                  paddingBottom: 2
                }}>
                  #ISTJ
                </p>
        
                <p style={{
                  fontFamily: 'Apple SD Gothic Neo',
                  fontWeight: 'regular',
                  fontSize: 14,
                  margin: 0,
                  color: '#000000',
                  lineHeight: '20px',
                  letterSpacing: '-1%',
                  position: 'absolute',
                  top: 203,
                  left: '55%',
                  backgroundColor: '#DFDEFF',
                  paddingLeft: 4,
                  paddingTop: 2,
                  paddingRight: 4,
                  paddingBottom: 2
                }}>
                  #막공몬
                </p>
              </div>
        );
    }
}

export default HyunsikProfileView