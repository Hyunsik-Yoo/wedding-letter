import React, { Component } from "react";

import EunjiProfileImage from '../resource/eunji-profile.png';

class EunjiProfileView extends Component {
    render() {
        return (
            <div style={{
                position: 'relative',
                marginTop: 43
            }}>
                <div style={{
                    width: '100%',
                    height: 237
                }} />

                <img src={EunjiProfileImage} alt="Eunji profile image" style={{
                    width: '50%',
                    position: 'absolute',
                    right: 30,
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
                    top: 78,
                    right: '60%'
                }}>
                    Eunji
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
                    right: '55%',
                    backgroundColor: '#FFDAD7',
                    paddingLeft: 4,
                    paddingTop: 2,
                    paddingRight: 4,
                    paddingBottom: 2,
                }}>
                    #박은지
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
                    right: '55%',
                    backgroundColor: '#FFDAD7',
                    paddingLeft: 4,
                    paddingTop: 2,
                    paddingRight: 4,
                    paddingBottom: 2
                }}>
                    #박상연,이상녀의 차녀
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
                    right: '55%',
                    backgroundColor: '#FFDAD7',
                    paddingLeft: 4,
                    paddingTop: 2,
                    paddingRight: 4,
                    paddingBottom: 2
                }}>
                    #ISFP
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
                    right: '55%',
                    backgroundColor: '#FFDAD7',
                    paddingLeft: 4,
                    paddingTop: 2,
                    paddingRight: 4,
                    paddingBottom: 2
                }}>
                    #🫠
                </p>
            </div>
        );
    }
}

export default EunjiProfileView