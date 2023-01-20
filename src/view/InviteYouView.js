import React, { Component } from "react";

import inviteImage from '../resource/invite-you.png';
import personIcon from '../resource/person.png';
import starWithoutBorderImage from '../resource/star-without-border.png';

class InviteYouView extends Component {
    render() {
        return (
            <div style={{
                marginLeft: 30,
                marginRight: 30,
                marginTop: 51,
                position: 'relative'
            }}>
                <img src={inviteImage} alt="Invite you image" style={{
                    maxWidth: '100%'
                }} />

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 23,
                    lineHeight: '34px',
                    margin: 0,
                    color: '#0F0F0F',
                    position: 'absolute',
                    bottom: 52,
                    left: 18,
                    textAlign: 'left',
                    zIndex: 2,
                }}>
                    Invite You To<br></br>
                    Our Wedding Day
                </p>

                <img src={personIcon} alt="Person icon" style={{
                    zIndex: 2,
                    width: 26,
                    height: 26,
                    position: 'absolute',
                    left: 18,
                    bottom: 18
                }} />

                <img src={starWithoutBorderImage} alt="Star without border icon" style={{
                    zIndex: 2,
                    width: 19,
                    height: 19,
                    position: 'absolute',
                    right: 18,
                    bottom: 21
                }} />

                <img src={starWithoutBorderImage} alt="Star without border icon" style={{
                    zIndex: 2,
                    width: 19,
                    height: 19,
                    position: 'absolute',
                    right: 40,
                    bottom: 21
                }} />

                <img src={starWithoutBorderImage} alt="Star without border icon" style={{
                    zIndex: 2,
                    width: 19,
                    height: 19,
                    position: 'absolute',
                    right: 64,
                    bottom: 21
                }} />

                <div style={{
                    zIndex: 1,
                    height: 175,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(rgba(231, 220, 200, 0), rgba(231, 220, 200, 1))',
                    borderBottomRightRadius: 16,
                    borderBottomLeftRadius: 16
                }} />
            </div>
        );
    }
}

export default InviteYouView