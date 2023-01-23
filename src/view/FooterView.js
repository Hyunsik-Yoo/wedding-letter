import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import kakaoIcon from '../resource/img_kakao_logo.png';
import linkIcon from '../resource/img_link.png';

class FooterView extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#D0C1F0'
            }}>
                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 23,
                    color: '#000000',
                    lineHeight: '34px',
                    paddingTop: 75,
                    margin: 0
                }}>
                    Thank You!
                </p>

                <button
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({
                                title: '현식🤵 은지👰‍♀️ Wedding letter',
                                url: 'https://hyunsik-yoo.github.io/wedding-letter/',
                            });
                        } else {
                            alert("공유하기가 지원되지 않는 환경 입니다.")
                        }
                    }}
                    style={{
                        backgroundColor: '#FFDE30',
                        borderRadius: 8,
                        height: 48,
                        borderWidth: 1,
                        borderColor: '#000000',
                        padding: '12px 32px',
                        display: "block",
                        margin: 'auto',
                        marginTop: 14,
                    }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>

                        <img src={kakaoIcon} style={{
                            width: 24,
                            height: 24
                        }} />

                        <p style={{
                            fontFamily: 'Apple SD Gothic Neo',
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: '#000000',
                            lineHeight: '24px',
                            margin: 0,
                            letterSpacing: '-1%',
                            marginLeft: 6
                        }}>
                            카카오톡으로 공유하기
                        </p>
                    </div>
                </button>

                <CopyToClipboard
                    text={"https://hyunsik-yoo.github.io/wedding-letter/"}
                    onCopy={() => alert("주소를 복사했어요🙇‍♂️")}
                >
                    <button style={{
                        backgroundColor: '#D4AAFF',
                        borderRadius: 8,
                        height: 48,
                        borderWidth: 1,
                        width: 200,
                        borderColor: '#000000',
                        marginTop: 10,
                        padding: '12px 32px',
                        marginTop: 14,
                        marginBottom: 74,
                        marginLeft: 0,
                        marginRight: 0
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>

                            <img src={linkIcon} style={{
                                width: 24,
                                height: 24
                            }} />

                            <p style={{
                                fontFamily: 'Apple SD Gothic Neo',
                                fontWeight: 'bold',
                                fontSize: 12,
                                color: '#000000',
                                lineHeight: '24px',
                                margin: 0,
                                letterSpacing: '-1%',
                                marginLeft: 6
                            }}>
                                청첩장 링크 복사하기
                            </p>
                        </div>
                    </button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default FooterView