import React from 'react';
import { Link } from 'react-router-dom';
import '../css/qqgroup.css';
import gradelist from '../assets/gradelist.png';
import cloud2 from '../assets/cloud2.png'
import getprice from '../assets/getprice.png'
import qqgroup from '../assets/qqgroup.png'
import saoyisao from '../assets/saoyisao.png'
class GroupComponent extends React.Component {
    render() {
        return (
            <div className="index-bg page">
            <div className="movingBottomCloud animated slideInLeft delay5000"><img src={cloud2}/></div>
               <div className="result-bg animated1500 flipInX">
                
                   <div className="gradelist-wrap animated bounceInDown delay2000">
                        <img src={gradelist} alt="gradelist-icon" className="gradelist-icon"/>
                   </div>
                   <p className="resultDescribe animated zoomIn delay2500">&nbsp;&nbsp;&nbsp;&nbsp;亲爱的程晓同学，在围棋能力答题挑战赛活动中你一共参加了3次测评，成绩如下</p>
                    <div className="qqGroupBoxWrap">
                        <div className="qqGroup animated lightSpeedIn delay3000">
                            <div className="aiqidaoGroupWrap">
                                <img src={qqgroup} alt="qqgroup" className="aiqidaoGroupPic" />
                            </div>
                            <div className="groupDes">
                            <p className="animated flipInX delay4000">爱棋道启蒙交流2群:471794439</p>
                            <p className="animated flipInX delay4000">爱棋道启蒙交流2群:471794439</p>
                            <p className="animated flipInX delay4000">爱棋道启蒙交流2群:471794439</p>
                            <p className="animated flipInX delay4000">爱棋道启蒙交流2群:471794439</p>
                            </div>
                            <div className="saoyisaoWrap">
                                <img src={saoyisao} alt="saoyisao" className="saoyisao animated zoomIn delay4500"/>
                            </div>
                            <p className="animated zoomIn delay5000 redText">长按识别上图二维码一键加群</p>
                        </div>
                    </div>
               </div>
            </div>
        ); 
    }
}

export default GroupComponent;
