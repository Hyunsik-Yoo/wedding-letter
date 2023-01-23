import './App.css';
import { useEffect } from 'react';
import Lottie from 'react-lottie';

import CorneredView from './view/CorneredView';
import ChairView from './view/ChairView';

import mainImage from './resource/main.png';
import starImage from './resource/star.png';

import InviteYouView from './view/InviteYouView';
import HyunsikProfileView from './view/HyunsikProfileView';
import EunjiProfileView from './view/EunjiProfileView';
import DateAndLocationView from './view/DateAndLocationView';
import PhotoView from './view/PhotoView';
import InfoView from './view/InfoView';
import LocationView from './view/LocationView';
import FooterView from './view/FooterView';

import * as animationData from './resource/heart.json'
function App() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      console.log('time out')

      var element = document.querySelector('#loading');
      element.parentNode.removeChild(element);
    }, 3000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);


  return (
    <div className="App" style={{
      backgroundColor: '#F2F2F2',
      position: 'relative'
    }}>
      <div id='loading' style={{
        zIndex: 4,
        backgroundColor: '#F2F2F2',
        maxWidth: '100%',
        height: '100vh',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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
          height={'100%'}
          width={'100%'}
        />

      </div>

      <div id='contents' style={{
        maxWidth: '100%',
        maxWidth: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}>
        <div align="left" style={{
          paddingTop: 67,
          marginLeft: 28
        }}>
          <CorneredView title={"230401"} />

          <div style={{
            marginLeft: 6,
            display: 'inline-block'
          }}>
            <CorneredView title={"pm 12:30"} />
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

          <img src={mainImage} alt="Main image" style={{
            maxWidth: '100%',
            marginTop: 45
          }} />

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
            marginLeft: 0
          }}>
            <p style={{
              color: '#FFFFFF',
              fontFamily: 'Unbounded',
              fontWeight: 400,
              fontSize: 10,
              paddingTop: 12,
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

        <ChairView />

        <p style={{
          fontFamily: 'Apple SD Gothic Neo',
          fontWeight: 'light',
          fontSize: 16,
          margin: 0,
          color: '#7E5032',
          lineHeight: '27px',
          marginTop: 35,
          letterSpacing: '-2.5%'
        }}>
          따뜻한 봄에 시작한 인연이<br></br>
          함께 맞이하는 네 번째 봄이 다가오는 날<br></br>
          부부가 되려 합니다.<br></br>
          <br></br>
          저희 두 사람의 새로운 시작에<br></br>
          소중한 분들을 초대합니다.<br></br>
          부디 귀한 걸음 하시어<br></br>
          축하와 격려로 함께해 주세요.<br></br>
        </p>

        <InviteYouView />

        <HyunsikProfileView />

        <EunjiProfileView />

        <DateAndLocationView />

        <PhotoView />

        <InfoView />

        <LocationView />

        <FooterView />

      </div>

    </div >
  );
}

export default App;
