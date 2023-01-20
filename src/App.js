import './App.css';
import CorneredView from './view/CorneredView';
import ChairView from './view/ChairView';

import mainImage from './resource/main.png';
import starImage from './resource/star.png';

import InviteYouView from './view/InviteYouView';
import HyunsikProfileView from './view/HyunsikProfileView';
import EunjiProfileView from './view/EunjiProfileView';
import DateAndLocationView from './view/DateAndLocationView';

import photo1 from './resource/image1.png';
import photo2 from './resource/image2.png';
import photo3 from './resource/image3.png';
import gradientBackgroud from './resource/gradient-background.png';
import gradientPhoto from './resource/gradient-image.png';
import photo5 from './resource/image5.png';
import photo6 from './resource/image6.png';
import photo7 from './resource/image7.png';
import photo8 from './resource/image8.png';
import photo9 from './resource/image9.png';
import photo10 from './resource/image10.png';
import photo11 from './resource/image11.png';
import photo12 from './resource/image12.png';

function App() {
  return (
    <div className="App" style={{
      backgroundColor: '#F2F2F2'
    }}>
      <div align="left" style={{
        marginTop: 67,
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
        paddingRight: 30
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
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30
      }}>
        <div style={{
          backgroundColor: '#000000',
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          height: 32,
        }}>
          <p style={{
            color: '#FFFFFF',
            fontFamily: 'Unbounded',
            fontWeight: 400,
            fontSize: 10,
            paddingTop: 8,
            paddingLeft: 10,
            paddingRight: 16,
            paddingBottom: 8,
            margin: 0,
            lineHeight: '16px'
          }}>Wedding</p>
        </div>

        <div style={{
          border: '1px solid #000000',
          borderRadius: 16,
          height: 32,
          width: 32,
          marginLeft: 6
        }} />

        <div style={{
          backgroundColor: '#000000',
          borderRadius: 16,
          height: 32,
          marginLeft: 6
        }}>
          <p style={{
            color: '#FFFFFF',
            fontFamily: 'Unbounded',
            fontWeight: 400,
            fontSize: 10,
            paddingTop: 8,
            paddingLeft: 14,
            paddingRight: 14,
            paddingBottom: 8,
            margin: 0,
            lineHeight: '16px'
          }}>Day</p>
        </div>

        <div style={{
          border: '1px solid #000000',
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          height: 32,
          width: 40,
          marginLeft: 7
        }} />

        <div style={{
          width: 100,
          flexGrow: 1,
          border: '1px solid #000000',
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          height: 32,
          marginLeft: 9
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

      <div>
        <img src={photo1} style={{
          maxWidth: '100%'
        }} />

        <img src={photo2} style={{
          maxWidth: '100%',
          marginTop: 14
        }} />

        <img src={photo3} style={{
          maxWidth: '100%',
          marginTop: 14
        }} />

        <div style={{
          position: 'relative',
          marginTop: 25
        }}>
          <img src={gradientBackgroud} style={{
            maxWidth: '100%'
          }} />

          <img src={gradientPhoto} style={{
            maxWidth: '55%',
            position: 'absolute',
            top: 51,
            left: 0,
            right: 0,
            margin: 'auto'
          }} />

          <p style={{
            fontFamily: 'Unbounded',
            fontWeight: 400,
            fontSize: 9,
            margin: 0,
            color: '#633813',
            lineHeight: '24px',
            letterSpacing: '9%',
            position: 'absolute',
            left: 40,
            top: 225,
            transform: 'rotate(-90deg)'
          }}>
            2023.04.01
          </p>

          <p style={{
            fontFamily: 'Unbounded',
            fontWeight: 400,
            fontSize: 9,
            margin: 0,
            color: '#633813',
            lineHeight: '24px',
            letterSpacing: '9%',
            position: 'absolute',
            right: 40,
            top: 225,
            transform: 'rotate(90deg)'
          }}>
            Wedding Day
          </p>

          <p style={{
            fontFamily: 'Unbounded',
            fontWeight: 250,
            fontSize: 40,
            margin: 'auto',
            color: '#633813',
            lineHeight: '50px',
            position: 'absolute',
            bottom: 38,
            left: 0,
            right: 0
          }}>
            OUR<br></br>
            MEMORABLE<br></br>
            MOMENT
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <img src={photo5} style={{
            width: '49%',
            marginRight: 5
          }} />

          <img src={photo6} style={{
            width: '49%',
            marginLeft: 5
          }} />
        </div>
      </div>

      <div style={{
        marginTop: 14,
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          height: 370
        }}/>

        <img src={photo7} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '70%'
        }} />
      </div>

      <div style={{
        marginTop: 14,
        position: 'relative'
      }}>
        <div style={{
          width: '100%',
          height: 370
        }}/>

        <img src={photo8} style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '70%'
        }} />
      </div>

      <div style={{
        backgroundColor: '#000000',
        paddingTop: 14
      }}>
        <div style={{
          marginLeft: 20,
          marginRight: 20,
          display: 'flex',
          flexDirection: 'row',
          marginTop: 28
        }}>
          <img src={photo9} style={{
            maxWidth: '49%',
            marginRight: 4
          }} />

          <img src={photo10} style={{
            maxWidth: '49%',
            marginLeft: 4
          }} />
        </div>

        <div style={{
          marginLeft: 20,
          marginRight: 20,
          display: 'flex',
          flexDirection: 'row',
          marginTop: 8
        }}>
          <img src={photo11} style={{
            maxWidth: '49%',
            marginRight: 4
          }} />

          <img src={photo12} style={{
            maxWidth: '49%',
            marginLeft: 4
          }} />
        </div>

        

      </div>

    </div>
  );
}

export default App;
