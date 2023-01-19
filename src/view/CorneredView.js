import React, { Component } from "react";

class CorneredView extends Component {
    render() {
        return (
            <div style={{
                display: "inline-block"
            }}>
                <div style={{
                    border: '1px solid #000000',
                    borderRadius: 14,
                    height: 28,
                    display: "table",
                }}>
                    <p style={{
                        paddingTop: 4,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 4,
                        fontFamily: 'Unbounded',
                        fontWeight: 300,
                        fontSize: 12,
                        display: "table-cell",
                        verticalAlign: 'middle'
                    }}>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default CorneredView