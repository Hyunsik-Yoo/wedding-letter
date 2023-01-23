import React, { Component } from "react";

import starWithoutBorderImage from '../resource/star-without-border.png';

class InfoView extends Component {
    render() {
        return (
            <div style={{
                marginLeft: 30,
                marginRight: 30
            }}>
                <img src={starWithoutBorderImage} style={{
                    width: 32,
                    height: 32,
                    display: '-webkit-box',
                    marginRight: 'auto',
                    marginTop: 66
                }} />

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 23,
                    color: '#0F0F0F',
                    lineHeight: '34px',
                    marginTop: 13,
                    marginBottom: 0,
                    textAlign: 'left'
                }}>
                    Invite You To<br></br>
                    Our Wedding Day
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#000000',
                    lineHeight: '29px',
                    marginTop: 8,
                    marginBottom: 0,
                    textAlign: 'left'
                }}>
                    참석하시는 분들께 양해의 말씀을 드립니다!
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 800,
                    fontSize: 14,
                    color: '#000000',
                    lineHeight: '24px',
                    marginTop: 24,
                    marginBottom: 0,
                    textAlign: 'left'
                }}>
                    🚗 주차안내
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    color: '#000000',
                    lineHeight: '24px',
                    marginTop: 0,
                    marginBottom: 0,
                    textAlign: 'left',
                    letterSpacing: '-1%'
                }}>
                    주차공간이 여러 곳으로 나누어져 있는 웨딩홀입니다.<br></br>
                    당일 주차요원이 배치되어 있어 안내를 받으실 수 있지만 매우 불편하실 수 있습니다. 미리 사과의 말씀 드립니다.<br></br>
                    더 좋은 곳에서 초대드리지 못해 죄송한 마음 뿐입니다.😢<br></br>
                    합정역에서 도보 4분거리이므로 가급적 대중교통 이용을 권장드립니다!
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    color: '#000000',
                    lineHeight: '24px',
                    marginTop: 13,
                    paddingBottom: 78,
                    textAlign: 'left',
                    letterSpacing: '-1%'
                }}>
                    축하화환은 정중히 사양합니다.<br></br>
                    많은 양해 부탁드립니다.🙇‍♂️🙇‍♀️
                </p>


            </div>
        );
    }
}

export default InfoView