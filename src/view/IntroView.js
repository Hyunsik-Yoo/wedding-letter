import React, { Component } from "react";

import mainImage from '../resource/main.png';
import starImage from '../resource/star.png';

import CorneredView from './CorneredView';

import './ImageWithOverlay.css';

class IntroView extends Component {
    render() {
        return (
            <div>
        <div align="left" style={{
          paddingTop: 50,
          marginLeft: 28
        }}>
          <CorneredView title={"230401"} />

          <div style={{
            marginLeft: 6,
            display: 'inline-block'
          }}>
            <CorneredView title={"pm 12:40"} />
          </div>
        </div>

        <div style={{
          position: 'relative',
          marginTop: 10,
          paddingLeft: 30,
          paddingRight: 30,
          marginBottom: -5
        }}>
          <div style={{
            zIndex: 2,
            position: 'absolute'
          }}>
            <p style={{
              fontFamily: 'Unbounded',
              fontWeight: 900,
              fontSize: 56,
              textShadow: '-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000',
              marginTop: 0,
              marginBottom: 0,
              textAlign: 'left',
              paddingLeft: -2,
              color: '#F24434',
              lineHeight: '61px'
            }}>Hyunsik</p>

            <p style={{
              fontFamily: 'Unbounded',
              fontWeight: 900,
              fontSize: 56,
              textShadow: '-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000',
              marginTop: 0,
              marginBottom: 0,
              textAlign: 'left',
              paddingLeft: 0,
              color: '#F24434',
              lineHeight: '61px'
            }}>& Eunji</p>
          </div>

          <div className="image-container">
            <img className="image" src={mainImage} alt="Main image" style={{
              maxWidth: '100%',
              marginTop: 45,
              borderTopLeftRadius: '255px',
              borderTopRightRadius: '255px',
              border: '1px solid #000000',
              height: '509px',
              objectFit: 'cover'
            }} />
            <div className="overlay"></div>
          </div>
          

          <div vertical style={{
            zIndex: 2,
            position: 'absolute',
            right: 45,
            bottom: 40
          }}>
            <div style={{
              width: 24,
              height: 24
            }}>
              <img src={starImage} alt="Main image" style={{
                maxWidth: '100%'
              }} />
            </div>

            <div style={{
              width: 24,
              height: 24,
              marginTop: 5
            }}>
              <img src={starImage} alt="Main image" style={{
                maxWidth: '100%'
              }} />
            </div>

            <div style={{
              width: 24,
              height: 24,
              marginTop: 5
            }}>
              <img src={starImage} alt="Main image" style={{
                maxWidth: '100%'
              }} />
            </div>

          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 0,
          marginLeft: 30,
          marginRight: 30
        }}>
          <div style={{
            backgroundColor: '#000000',
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            height: 44,
          }}>
            <p style={{
              color: '#FFFFFF',
              fontFamily: 'Unbounded',
              fontWeight: 400,
              fontSize: 11,
              paddingTop: 14,
              paddingLeft: 10,
              paddingRight: 15,
              paddingBottom: 14,
              margin: 0,
              lineHeight: '16px'
            }}>Wedding</p>
          </div>

          <div style={{
            border: '1px solid #000000',
            borderRadius: 22,
            height: 44,
            width: 44,
            marginLeft: 0
          }} />

          <div style={{
            backgroundColor: '#000000',
            borderRadius: 22,
            height: 44,
            marginLeft: 0,
            display: 'flex',
            alignItems: 'center'
          }}>
            <p style={{
              color: '#FFFFFF',
              fontFamily: 'Unbounded',
              fontWeight: 400,
              fontSize: 10,
              paddingTop: 11,
              paddingLeft: 13,
              paddingRight: 13,
              paddingBottom: 11,
              margin: 0,
              lineHeight: '16px'
            }}>Day</p>
          </div>

          <div style={{
            border: '1px solid #000000',
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            height: 44,
            width: 48,
            marginLeft: 0
          }} />

          <div style={{
            width: 100,
            flexGrow: 1,
            border: '1px solid #000000',
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            height: 44,
            marginLeft: 0
          }} />
        </div>

        <p style={{
          fontFamily: 'Unbounded',
          fontWeight: 600,
          fontSize: 24,
          marginTop: 10,
          marginBottom: 0,
          marginLeft: 30,
          textAlign: 'left',
          color: '#0F0F0F',
          lineHeight: '32px'
        }}>Save the date</p>
        </div>
        );
    }
}

export default IntroView