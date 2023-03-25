import React, { Component } from "react";

import photo1 from '../resource/image1.png';
import photo2 from '../resource/image2.png';
import photo3 from '../resource/image3.png';
import gradientBackgroud from '../resource/gradient-background.png';
import gradientPhoto from '../resource/gradient-image.png';
import photo5 from '../resource/image5.png';
import photo6 from '../resource/image6.png';
import photo7 from '../resource/image7.png';
import photo8 from '../resource/image8.png';
import photo9 from '../resource/image9.png';
import photo10 from '../resource/image10.png';
import photo11 from '../resource/image11.png';
import photo12 from '../resource/image12.png';
import photo13 from '../resource/image13.png';

class PhotoView extends Component {
    render() {
        return (
            <div>
                <img src={photo1} style={{
                    maxWidth: '100%'
                }} />

                <img src={photo2} style={{
                    maxWidth: '100%',
                    marginTop: 14
                }} />

                <img src={photo3} style={{
                    maxWidth: '100%',
                    marginTop: 14
                }} />

                <div style={{
                    position: 'relative',
                    marginTop: 25
                }}>
                    <img src={gradientBackgroud} style={{
                        maxWidth: '100%'
                    }} />

                    <img src={gradientPhoto} style={{
                        maxWidth: '55%',
                        position: 'absolute',
                        top: 51,
                        left: 0,
                        right: 0,
                        margin: 'auto'
                    }} />

                    <p style={{
                        fontFamily: 'Unbounded',
                        fontWeight: 400,
                        fontSize: 9,
                        margin: 0,
                        color: '#633813',
                        lineHeight: '24px',
                        letterSpacing: '9%',
                        position: 'absolute',
                        left: 40,
                        top: 225,
                        transform: 'rotate(-90deg)'
                    }}>
                        2023.04.01
                    </p>

                    <p style={{
                        fontFamily: 'Unbounded',
                        fontWeight: 400,
                        fontSize: 9,
                        margin: 0,
                        color: '#633813',
                        lineHeight: '24px',
                        letterSpacing: '9%',
                        position: 'absolute',
                        right: 40,
                        top: 225,
                        transform: 'rotate(90deg)'
                    }}>
                        Wedding Day
                    </p>

                    <p style={{
                        fontFamily: 'Unbounded',
                        fontWeight: 250,
                        fontSize: 40,
                        margin: 'auto',
                        color: '#633813',
                        lineHeight: '50px',
                        position: 'absolute',
                        bottom: 38,
                        left: 0,
                        right: 0
                    }}>
                        OUR<br></br>
                        MEMORABLE<br></br>
                        MOMENT
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <img src={photo5} style={{
                        width: '49%'
                    }} />

                    <img src={photo6} style={{
                        width: '49%'
                    }} />
                </div>

                <img src={photo7} style={{
                    display: '-webkit-box',
                    marginRight: 'auto',
                    width: '70%',
                    marginTop: 14,
                }} />

                <img src={photo8} style={{
                    display: '-webkit-box',
                    marginLeft: 'auto',
                    width: '70%',
                    marginTop: 14,
                    marginBottom: 14
                }} />

                <div style={{
                    backgroundColor: '#000000',
                    paddingTop: 28,
                    paddingLeft: 20,
                    paddingRight: 20
                }}>
                    <img src={photo9} style={{
                        maxWidth: '100%'
                    }} />

                    <div style={{
                        position: 'relative',
                        marginTop: 17,
                        paddingBottom: 14
                    }}>
                        <div style={{
                            maxWidth: '100%',
                            height: 14
                        }} />

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 600,
                            fontSize: 9,
                            display: 'inline-block',
                            color: '#FFFFFF',
                            lineHeight: '14px',
                            position: 'absolute',
                            left: 0,
                            top: 0
                        }}>
                            Hyunsik & Eunji
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 600,
                            fontSize: 9,
                            display: 'inline-block',
                            color: '#FFFFFF',
                            lineHeight: '14px',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            right: 0
                        }}>
                            23.04.01
                        </p>

                        <p style={{
                            fontFamily: 'Unbounded',
                            fontWeight: 600,
                            fontSize: 9,
                            color: '#FFFFFF',
                            lineHeight: '14px',
                            display: 'inline-block',
                            position: 'absolute',
                            top: 0,
                            right: 0
                        }}>
                            pm 12:40
                        </p>
                    </div>
                </div>

                <img src={photo10} style={{
                    display: '-webkit-box',
                    marginRight: 'auto',
                    width: '70%',
                    marginTop: 14,
                }} />

                <img src={photo11} style={{
                    display: '-webkit-box',
                    marginLeft: 'auto',
                    width: '70%',
                    marginTop: 14,
                    marginBottom: 14
                }} />

                <img src={photo12} style={{
                    width: '100%',
                    marginTop: 12
                }} />

                <img src={photo13} style={{
                    width: '100%',
                    marginTop: 12
                }} />
                
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/j3Qg_3wNk40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        );
    }
}

export default PhotoView