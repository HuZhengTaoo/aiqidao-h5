import React from 'react';
import {Toast,SearchBar} from 'antd-mobile'; 


class TestComponent extends React.Component {
 
    componentDidMount() {
        Toast.loading('Loading...',0,null,false);
    
      }
      click(){
        Toast.hide();
      }

      
    render() {
        return (
            <div>

                <button onClick={this.click.bind(this)}>click</button>
                <SearchBar placeholder="Search" maxLength={8} />
            </div>
        );
    }
}

export default TestComponent;
