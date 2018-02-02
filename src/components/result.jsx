import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/result.css';
import gradelist from '../assets/gradelist.png';
import cloud2 from '../assets/cloud2.png';
// import listcircle from '../assets/listcircle.png'
import getprice from '../assets/getprice.png';
class ResultComponent extends React.Component {
    RedirectShare() {
        const { history } = this.props;
        history.push('/share');
    }
    render() {
        let record = JSON.parse(localStorage.getItem('record'));
        console.log(record);
        return (
            <div className="index-bg page">
                <div className="movingBottomCloud animated slideInLeft delay5000">
                    <img src={cloud2} />
                </div>
                <div className="result-bg animated1500 flipInX">
                    <div className="gradelist-wrap animated bounceInDown delay2000">
                        <img
                            src={gradelist}
                            alt="gradelist-icon"
                            className="gradelist-icon"
                        />
                    </div>
                    <p className="resultDescribe animated zoomIn delay2500">
                        &nbsp;&nbsp;&nbsp;&nbsp;亲爱的程晓同学，在围棋能力答题挑战赛活动中你一共参加了3次测评，成绩如下
                    </p>

                    <h2 className="testName animated zoomIn delay3000">
                        测试名称
                    </h2>
                    <div className="yellow-box animated flipInX delay3500">
                        <div className="yellow-box-detail animated flipInX delay4000">
                            <p className="ranking animated flipInX delay4500">
                                排名
                            </p>
                            <div className="flex-content animated flipInX delay4500">
                                <div className="left font-shadow">
                                    {record.Rank}
                                </div>
                                <div className="center">
                                    <div className="youClass animated flipInX delay4500">
                                        段位:{record.Duan}
                                    </div>
                                    <div className="yourCalculation animated flipInX delay4500">
                                        赛场:{record.Race}
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="yourAbility animated flipInX delay4500">
                                        计算力:{record.Calc}
                                    </div>
                                    <div className="yourExpansionAbility animated flipInX delay4500">
                                        综合能力:{record.Comprehensive}
                                    </div>
                                </div>
                            </div>
                            <div className="recommondClassWrap">
                                <div className="barWrap">
                                    <div className="bar animated lightSpeedIn delay5500" />
                                </div>
                                <div className="recommondClass font-shadow animated lightSpeedIn delay5500">
                                    推荐班级：{record.RecommendActivity}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResultComponent);
