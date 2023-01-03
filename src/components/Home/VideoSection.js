import React, { useState } from 'react';
import Link from 'next/link';
import CounterStyleTwo from '../Elements/Counter/CounterStyleTwo';
import ModalVideo from 'react-modal-video';


const Video = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <section className="video-area video-bg" style={{ backgroundImage:`url(${'assets/img/bg/video_bg.jpg'})`}}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                            <div className="video-paly">
                                <a href="#!" className="popup-video" onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i> </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title mb-40">
                                <h2 className="title">Experience The Features Magic of Netbox</h2>
                            </div>
                            <div className="video-content-wrap">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                                <CounterStyleTwo />
                                <Link href="/pricing"><a className="btn">Try Us Free</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Video;