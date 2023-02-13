import React, { Component } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import copyIcon from '../resource/icon_copy.png';

class LocationView extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#616096',
                paddingTop: 41
            }}>
                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 23,
                    color: '#FFFFFF',
                    lineHeight: '34px',
                    marginTop: 0,
                    marginLeft: 30,
                    marginBottom: 10,
                    textAlign: 'left'
                }}>
                    Location
                </p>

                <RenderAfterNavermapsLoaded
                    ncpClientId={'tmxy7l03r6'}
                    error={<p>Maps Load Error</p>}
                    loading={<p>Maps Loading...</p>}
                >
                    <NaverMap
                        mapDivId={"react-naver-map"}
                        style={{
                            marginTop: 0,
                            height: 271
                        }}
                        defaultCenter={{ lat: 37.55252989697258, lng: 126.91731877461567 }}
                        defaultZoom={15}
                    >
                        <Marker
                            key={1}
                            position={{ lat: 37.55252989697258, lng: 126.91731877461567 }}
                            title={"웨딩 시그니처"}
                            onClick={() => {
                                alert('여기는 네이버 입니다.')
                            }}
                        />
                    </NaverMap>
                </RenderAfterNavermapsLoaded>

                <div style={{
                    display: 'flex',
                    flexDirection: "column"
                }}>
                    <p style={{
                        fontSize: 18,
                        lineHeight: '24px',
                        marginTop: 16,
                        marginLeft: 30,
                        marginBottom: 0,
                        textAlign: 'left'
                    }}>
                        💒
                    </p>

                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: '#FFFFFF',
                        lineHeight: '24px',
                        marginTop: 6,
                        marginLeft: 30,
                        marginBottom: 0,
                        textAlign: 'left'
                    }}>
                        웨딩시그니처
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: "row",
                        marginLeft: 30,
                    }}>
                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 'regular',
                            fontSize: 14,
                            color: '#FFFFFF',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            서울 마포구 양화로 87 (서교동 378-7)
                        </p>

                        <CopyToClipboard
                            text={"서울 마포구 양화로 87"}
                            onCopy={() => alert("주소를 복사했어요🙇‍♂️")}
                        >
                            <button style={{
                                backgroundColor: '#616096',
                                marginLeft: 8,
                                borderWidth: 0,
                                marginTop: -4,
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: 20
                                }}>
                                    <img src={copyIcon} style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 2
                                    }} />

                                    <p style={{
                                        fontFamily: 'Apple SD Gothic Neo',
                                        fontWeight: 'regular',
                                        fontSize: 12,
                                        color: '#D0C1F0',
                                        lineHeight: '24px',
                                        margin: 0,
                                        letterSpacing: '-1%',
                                        marginLeft: 2
                                    }}>
                                        <u>복사</u>
                                    </p>
                                </div>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>

                <div align='left' style={{
                    marginTop: 50,
                    marginLeft: 30,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '24px',
                        margin: 0,
                        backgroundColor: '#515086',
                        letterSpacing: '-1%',
                        padding: '0px 6px',
                        display: 'inline-block'
                    }}>
                        지하철 안내
                    </p>
                </div>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    color: '#CAC9FC',
                    lineHeight: '21px',
                    textAlign: 'left',
                    letterSpacing: '-1%',
                    marginTop: 8,
                    marginLeft: 38,
                    marginBottom: 0,
                    marginRight: 0
                }}>
                    2호선, 6호선 합정역 하차 - 2번 출구 도보 4분<br></br>
                    홍대입구, 공항철도, 경의선 1번 출구 도보 11분
                </p>

                <div align='left' style={{
                    marginTop: 20,
                    marginLeft: 30,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '24px',
                        margin: 0,
                        backgroundColor: '#515086',
                        letterSpacing: '-1%',
                        padding: '0px 6px',
                        display: 'inline-block'
                    }}>
                        버스 안내
                    </p>
                </div>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    color: '#CAC9FC',
                    lineHeight: '21px',
                    textAlign: 'left',
                    letterSpacing: '-1%',
                    marginTop: 8,
                    marginLeft: 38,
                    marginBottom: 0,
                    marginRight: 0
                }}>
                    서교동 / 우리은행서교동지점 / 합정역 하차
                </p>

                <div align='left' style={{
                    marginLeft: 38,
                    marginTop: 4,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        textAlign: 'left',
                        letterSpacing: '-1%',
                        display: 'inline-block',
                        margin: 0
                    }}>
                        파랑(간선)
                    </p>

                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        textAlign: 'left',
                        marginLeft: 10,
                        marginBottom: 0,
                        letterSpacing: '-1%',
                        marginTop: 0,
                        display: 'inline-block'
                    }}>
                        271A, 921, 271A, 602, 603, 604, 761
                    </p>
                </div>

                <div align='left' style={{
                    marginLeft: 38,
                    marginTop: 2,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        margin: 0,
                        letterSpacing: '-1%',
                        display: 'inline-block',
                        float: 'left'
                    }}>
                        초록(지선)
                    </p>

                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        textAlign: 'left',
                        marginLeft: 10,
                        marginBottom: 0,
                        letterSpacing: '-1%',
                        marginTop: 0,
                        display: 'inline-block'
                    }}>
                        마포16, 마포08, 마포09, 마포15<br></br>
                        5712, 5714, 6712, 6716, 7612, 7734, 7739
                    </p>
                </div>

                <div align='left' style={{
                    marginLeft: 38,
                    marginTop: 2,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        margin: 0,
                        letterSpacing: '-1%',
                        display: 'inline-block',
                        float: 'left'
                    }}>
                        빨강(광역)
                    </p>

                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'regular',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '21px',
                        textAlign: 'left',
                        marginLeft: 10,
                        marginBottom: 0,
                        letterSpacing: '-1%',
                        marginTop: 0,
                        display: 'inline-block'
                    }}>
                        1000, 1100, 1101, 1200, 1300, 1301, 1302<br></br>
                        1601, 3100
                    </p>
                </div>

                <div align='left' style={{
                    marginTop: 25,
                    marginLeft: 30,
                }}>
                    <p style={{
                        fontFamily: 'Apple SD Gothic Neo',
                        fontWeight: 'bold',
                        fontSize: 14,
                        color: '#CAC9FC',
                        lineHeight: '24px',
                        margin: 0,
                        backgroundColor: '#515086',
                        letterSpacing: '-1%',
                        padding: '0px 6px',
                        display: 'inline-block'
                    }}>
                        주차 안내
                    </p>
                </div>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 14,
                    color: '#CAC9FC',
                    lineHeight: '21px',
                    textAlign: 'left',
                    marginLeft: 38,
                    marginBottom: 0,
                    letterSpacing: '-1%',
                    marginTop: 7
                }}>
                    제 1주차장 - 본 건물<br></br>
                    제 2주차장 - H스퀘어<br></br>
                    제 3주차장 - 서교빌딩 주차장
                </p>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'regular',
                    fontSize: 12,
                    color: '#CAC9FC',
                    lineHeight: '21px',
                    textAlign: 'left',
                    marginLeft: 38,
                    marginBottom: 0,
                    letterSpacing: '-1%',
                    marginTop: 8,
                    paddingBottom: 46
                }}>
                    *당일 모든 주차는 주차요원의 안내를 받아주시길 바랍니다.
                </p>

            </div>
        );
    }
}

export default LocationView