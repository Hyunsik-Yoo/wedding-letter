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
                    fontSize: 16,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '16px',
                    paddingTop: 69,
                    textAlign: 'left',
                    paddingLeft: 27
                }}>
                    π
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
                    2023λ 4μ 1μΌ<br></br>
                    ν μμΌ μ€ν 12μ 40λΆ
                </p>

                <p style={{
                    fontFamily: 'Unbounded',
                    fontWeight: 800,
                    fontSize: 16,
                    margin: 0,
                    color: '#FFFFFF',
                    lineHeight: '16px',
                    textAlign: 'left',
                    paddingLeft: 27,
                    marginTop: 33
                }}>
                    π
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
                    ν©μ  μ¨λ©μκ·Έλμ²<br></br>
                    4μΈ΅ μλμ€ν
                </p>
            </div>
        );
    }
}

export default DateAndLocationView