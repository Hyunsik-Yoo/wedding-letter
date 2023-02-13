import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import starWithoutBorderImage from '../resource/star-without-border.png';
import starBlueImage from '../resource/star-blue.png';
import starPuppleImage from '../resource/star-pupple.png';

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

                <img src={starWithoutBorderImage} style={{
                    width: 32,
                    height: 32,
                    display: '-webkit-box',
                    marginRight: 'auto',
                    marginTop: 9
                }} />

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#000000',
                    lineHeight: '24px',
                    marginTop: 22,
                    marginBottom: 0,
                    textAlign: 'left'
                }}>
                    신랑 측 마음 전하실 곳
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#D6D5EC',
                    borderRadius: 8,
                    height: 85,
                    border: '1px solid #A3A2D0',
                    marginTop: 12
                }}>
                    <img src={starBlueImage} style={{
                        width: 14,
                        height: 13,
                        display: '-webkit-box',
                        marginLeft: 16,
                        marginTop: 13
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 8
                    }}>
                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 800,
                            fontSize: 14,
                            color: '#515086',
                            lineHeight: '20px',
                            marginTop: 13,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            신랑 혼주
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 400,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 2,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            1002-745-820577
                        </p>

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 500,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            우리은행 유광열
                        </p>

                    </div>

                    <div style={{
                        height: 26,
                        maxWidth: '100%',
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 16
                    }}>
                        <CopyToClipboard
                            text={"우리 1002-745-820577"}
                            onCopy={() => alert("번호를 복사했어요🙇‍♀️")}
                        >
                            <button style={{
                                backgroundColor: '#A3A2D0',
                                borderRadius: 15,
                                height: 30,
                                borderWidth: 0,
                                padding: '1px 9px',
                                float: 'left'
                            }}>
                                <p style={{
                                    fontFamily: 'Apple SD Gothic Neo',
                                    fontWeight: 'regular',
                                    fontSize: 12,
                                    color: '#515086',
                                    lineHeight: '24px',
                                    margin: 0,
                                    letterSpacing: '-1%'
                                }}>
                                    복사하기
                                </p>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#D6D5EC',
                    borderRadius: 8,
                    height: 85,
                    border: '1px solid #A3A2D0',
                    marginTop: 8
                }}>
                    <img src={starBlueImage} style={{
                        width: 14,
                        height: 13,
                        display: '-webkit-box',
                        marginLeft: 16,
                        marginTop: 13
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 8
                    }}>
                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 800,
                            fontSize: 14,
                            color: '#515086',
                            lineHeight: '20px',
                            marginTop: 13,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            신랑 혼주
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 400,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 2,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            186-12-158723
                        </p>

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 500,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            농협은행 김옥분
                        </p>

                    </div>

                    <div style={{
                        height: 26,
                        maxWidth: '100%',
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 16
                    }}>
                        <CopyToClipboard
                            text={"농협 186-12-158723"}
                            onCopy={() => alert("번호를 복사했어요🙇‍♂️")}
                        >
                            <button style={{
                                backgroundColor: '#A3A2D0',
                                borderRadius: 15,
                                height: 30,
                                borderWidth: 0,
                                padding: '1px 9px',
                                float: 'left'
                            }}>
                                <p style={{
                                    fontFamily: 'Apple SD Gothic Neo',
                                    fontWeight: 'regular',
                                    fontSize: 12,
                                    color: '#515086',
                                    lineHeight: '24px',
                                    margin: 0,
                                    letterSpacing: '-1%'
                                }}>
                                    복사하기
                                </p>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>

                <div style={{
                    border: '1px solid #A3A2D0',
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#D6D5EC',
                    borderRadius: 8,
                    height: 85,
                    marginTop: 8
                }}>
                    <img src={starBlueImage} style={{
                        width: 14,
                        height: 13,
                        display: '-webkit-box',
                        marginLeft: 16,
                        marginTop: 13
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 8
                    }}>
                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 800,
                            fontSize: 14,
                            color: '#515086',
                            lineHeight: '20px',
                            marginTop: 13,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            신랑
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 400,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 2,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            709402-00-086053
                        </p>

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 500,
                            fontSize: 12,
                            color: '#515086',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            국민은행 유현식
                        </p>

                    </div>

                    <div style={{
                        height: 26,
                        maxWidth: '100%',
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 16
                    }}>
                        <CopyToClipboard
                            text={"국민 709402-00-086053"}
                            onCopy={() => alert("번호를 복사했어요🙇‍♂️")}
                        >
                            <button style={{
                                backgroundColor: '#A3A2D0',
                                borderRadius: 15,
                                height: 30,
                                borderWidth: 0,
                                padding: '1px 9px',
                                float: 'left'
                            }}>
                                <p style={{
                                    fontFamily: 'Apple SD Gothic Neo',
                                    fontWeight: 'regular',
                                    fontSize: 12,
                                    color: '#515086',
                                    lineHeight: '24px',
                                    margin: 0,
                                    letterSpacing: '-1%'
                                }}>
                                    복사하기
                                </p>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>

                <p style={{
                    fontFamily: 'Apple SD Gothic Neo',
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#000000',
                    lineHeight: '24px',
                    marginTop: 40,
                    marginBottom: 0,
                    textAlign: 'left'
                }}>
                    신부 측 마음 전하실 곳
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#FBE5FF',
                    borderRadius: 8,
                    height: 85,
                    border: '1px solid #CBB1D0',
                    marginTop: 12
                }}>
                    <img src={starPuppleImage} style={{
                        width: 14,
                        height: 13,
                        display: '-webkit-box',
                        marginLeft: 16,
                        marginTop: 13
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 8
                    }}>
                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 800,
                            fontSize: 14,
                            color: '#8B5095',
                            lineHeight: '20px',
                            marginTop: 13,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            신부 혼주
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 400,
                            fontSize: 12,
                            color: '#8B5095',
                            lineHeight: '18px',
                            marginTop: 2,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            1002-741-029044
                        </p>

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 500,
                            fontSize: 12,
                            color: '#8B5095',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            우리은행 이상녀
                        </p>

                    </div>

                    <div style={{
                        height: 26,
                        maxWidth: '100%',
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 16
                    }}>
                        <CopyToClipboard
                            text={"우리 1002-741-029044"}
                            onCopy={() => alert("번호를 복사했어요🙇‍♂️")}
                        >
                            <button style={{
                                backgroundColor: '#E0B7E8',
                                borderRadius: 15,
                                height: 30,
                                borderWidth: 0,
                                padding: '1px 9px',
                                float: 'left'
                            }}>
                                <p style={{
                                    fontFamily: 'Apple SD Gothic Neo',
                                    fontWeight: 'regular',
                                    fontSize: 12,
                                    color: '#8B5095',
                                    lineHeight: '24px',
                                    margin: 0,
                                    letterSpacing: '-1%'
                                }}>
                                    복사하기
                                </p>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#FBE5FF',
                    borderRadius: 8,
                    height: 85,
                    border: '1px solid #CBB1D0',
                    marginTop: 12,
                    marginBottom: 50
                }}>
                    <img src={starPuppleImage} style={{
                        width: 14,
                        height: 13,
                        display: '-webkit-box',
                        marginLeft: 16,
                        marginTop: 13
                    }} />

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: 8
                    }}>
                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 800,
                            fontSize: 14,
                            color: '#8B5095',
                            lineHeight: '20px',
                            marginTop: 13,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            신부
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 400,
                            fontSize: 12,
                            color: '#8B5095',
                            lineHeight: '18px',
                            marginTop: 2,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            879602-01-083525
                        </p>

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 500,
                            fontSize: 12,
                            color: '#8B5095',
                            lineHeight: '18px',
                            marginTop: 0,
                            marginBottom: 0,
                            textAlign: 'left'
                        }}>
                            국민은행 박은지
                        </p>

                    </div>

                    <div style={{
                        height: 26,
                        maxWidth: '100%',
                        marginTop: 30,
                        marginLeft: 'auto',
                        marginRight: 16
                    }}>
                        <CopyToClipboard
                            text={"국민 879602-01-083525"}
                            onCopy={() => alert("번호를 복사했어요🙇‍♀️")}
                        >
                            <button style={{
                                backgroundColor: '#E0B7E8',
                                borderRadius: 15,
                                height: 30,
                                borderWidth: 0,
                                padding: '1px 9px',
                                float: 'left'
                            }}>
                                <p style={{
                                    fontFamily: 'Apple SD Gothic Neo',
                                    fontWeight: 'regular',
                                    fontSize: 12,
                                    color: '#8B5095',
                                    lineHeight: '24px',
                                    margin: 0,
                                    letterSpacing: '-1%'
                                }}>
                                    복사하기
                                </p>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>


            </div>
        );
    }
}

export default InfoView