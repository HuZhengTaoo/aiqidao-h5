import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import logo from '../assets/logo.png';
import Search from '../components/search';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {Toast} from 'antd-mobile'; 
import Animate from 'rc-animate';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';

import '../css/page1.css';

class IndexComponent extends React.Component {
    state = {
        selectPhone: 0,
        record: PropTypes.object
    };
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    RedirectResult() {
        const { history } = this.props;
        console.log(this.state.selectPhone);
       
        axios
            .get(`/json/tinyactivity/usergrade?phone=${this.state.selectPhone}`)
            .then(res => {
                if (res && res.status === 200) {
                    localStorage.setItem(
                        'record',
                        JSON.stringify(res.data.Data)
                    );
                    history.push('/result');
                }
                
            });
    }

    handleEmail(event) {
        console.log(event.target.value);
    }

    handleSelect(value) {
        this.setState({
            selectPhone: value
        });
    }

    render() {
        return (
            <div className="index-bg page">
                <div className="logo animated bounceInDown">
                    <img
                        src={logo}
                        className="responsive-img"
                        alt="logo"
                        className="responsive-img"
                    />
                    {}
                </div>
                <h3 className="title animated bounceInLeft">
                    寻找围棋未来之星
                </h3>
                <div className="search-wrapper animated zoomIn delay1000">
                    <p className="search-title animated flipInX delay1500">
                        成绩查询
                    </p>
                    <div className="search-input animated zoomIn delay2000">
                        <Search onChange={this.handleSelect.bind(this)} />
                    </div>
                    <div
                        onClick={this.RedirectResult.bind(this)}
                        className="search-button animated flipInX delay2500"
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(IndexComponent);
