import React, { Component } from "react";

class DateAndLocationView extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#616096',
                marginTop: 66 
            }}>
                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 800,
                    fontSize: 12,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '16px',
                    paddingTop: 69,
                    textAlign: 'left',
                    paddingLeft: 27
                }}>
                    Date
                </p>

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 26,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '36px',
                    textAlign: 'left',
                    paddingLeft: 27,
                    marginTop: 5
                }}>
                    2023년 4월 1일<br></br>
                    토요일 오후 12시 40분
                </p>

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 800,
                    fontSize: 12,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '16px',
                    textAlign: 'left',
                    paddingLeft: 27,
                    marginTop: 33
                }}>
                    Place
                </p>

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 600,
                    fontSize: 26,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '36px',
                    textAlign: 'left',
                    paddingLeft: 27,
                    marginTop: 7,
                    paddingBottom: 69
                }}>
                    합정 웨딩시그니처<br></br>
                    4층 아너스홀
                </p>
            </div>
        );
    }
}

export default DateAndLocationView