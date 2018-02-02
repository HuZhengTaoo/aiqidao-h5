import React from 'react';
import { Link } from 'react-router-dom';
import Animate from 'rc-animate';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
// pic
import button from '../assets/share_button.png';
import box from '../assets/share-box.png';
import group from '../assets/share-group.png';
import flower from '../assets/sm_flower.png';
import circle from '../assets/sm_circle.png';
import light from '../assets/light.png';
import star from '../assets/star.png';
import medal from '../assets/medal.png';
import wing from '../assets/wing.png';
// css
import '../css/share.css';

class ShareComponent extends React.Component {
    render() {
        return (
            <div className="index-bg page">
                <div className="mask animated fadeIn" />
                <div className="wing-wrapper">
                    <div className="wing animated zoomIn delay2000">
                        <img src={wing} className="wing-img" alt="wing" />
                        <img src={star} className="star-img" alt="star" />
                        <img
                            className="wing-light rotate delay2500 infinite"
                            src={light}
                            alt="light"
                        />
                    </div>
                    <div className="medal animated flipInY delay1000">
                        <img src={medal} alt="medal" />
                        <span className="medal-review animated rollIn delay1500">
                            A<sup>+</sup>
                        </span>
                    </div>
                </div>
                <div className="review-wrapper animated bounceIn delay500">
                    <div className="review-title animated flipInX delay2500">
                        陈晓某同学
                    </div>
                    <div className="review-context animated fadeInLeft delay3000">
                        在爱棋道围棋能力答题挑战赛中表现优异，能力评定为初级A+,特颁此证，以资鼓励。
                    </div>
                    <img
                        src={flower}
                        className="review-flower animated fadeInLeft delay1000"
                    />
                    <img
                        src={circle}
                        className="review-circle animated fadeInRight delay1000"
                    />
                </div>
                <div className="share-button animated bounceIn delay3500">
                    <img
                        src={button}
                        className="animated pulse delay4000 infinite"
                        alt="share"
                    />
                </div>
                <p className="share-tip animated bounceIn delay4000">
                    快将你的成绩点击分享
                </p>
            </div>
        );
    }
}

export default ShareComponent;
