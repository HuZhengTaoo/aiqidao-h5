import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Icon, Button, Input, AutoComplete } from 'antd';

class SearchComponent extends React.Component {
    render() {
        const { onChange } = this.props;
        return (
            <div className="search-context">
                <AutoComplete
                    className="global-search"
                    size="large"
                    placeholder="请输入手机号"
                    filterOption={(inputValue, option) =>
                        option.props.children
                            .toUpperCase()
                            .indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default SearchComponent;
