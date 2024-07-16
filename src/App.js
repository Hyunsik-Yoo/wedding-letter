import './App.css';
import { useEffect } from 'react';
import Lottie from 'react-lottie';

import CorneredView from './view/CorneredView';
import ChairView from './view/ChairView';

import InviteYouView from './view/InviteYouView';
import HyunsikProfileView from './view/HyunsikProfileView';
import EunjiProfileView from './view/EunjiProfileView';
import DateAndLocationView from './view/DateAndLocationView';
import PhotoView from './view/PhotoView';
import InfoView from './view/InfoView';
import LocationView from './view/LocationView';
import FooterView from './view/FooterView';
import LoadingView from './view/LoadingView';
import IntroView from './view/IntroView';

function App() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      console.log('time out')

      var element = document.querySelector('#loading');
      element.parentNode.removeChild(element);

      var html = document.querySelector('html');
      if (html) {
        html.style.overflow = 'auto';
      }
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
      <LoadingView />

      <div id='contents' style={{
        maxWidth: '100%'
      }}>
        <IntroView />

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
