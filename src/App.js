import './App.css';
import CorneredView from './view/CorneredView';

import mainImage from './resource/main.png';
import starImage from './resource/star.png';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
