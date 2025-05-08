import './App.css';
import React from 'react';
import { APP_STRINGS } from './constants/strings';

// Hooks
import useLoading from './hooks/useLoading';

// Components
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
import Loading from './components/Loading';
import IntroView from './view/IntroView';

function App() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
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
        {APP_STRINGS.INVITATION.LINE1}<br></br>
        {APP_STRINGS.INVITATION.LINE2}<br></br>
        {APP_STRINGS.INVITATION.LINE3}<br></br>
        <br></br>
        {APP_STRINGS.INVITATION.LINE4}<br></br>
        {APP_STRINGS.INVITATION.LINE5}<br></br>
        {APP_STRINGS.INVITATION.LINE6}<br></br>
        {APP_STRINGS.INVITATION.LINE7}<br></br>
      </p>

      <InviteYouView />

      <HyunsikProfileView />

      <EunjiProfileView />

      <DateAndLocationView />

      <PhotoView />

      <InfoView />

      <LocationView />

      <FooterView />

    </div >
  );
}

export default App;
