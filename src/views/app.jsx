import React, { Component } from 'react';

const data = [
  '早8点开晨会，分配今天的开发工作',
  '早9点和项目经理作开发需求讨论会',
  '晚5:30对今日代码进行review'
]

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <input type="text" placeholder="jspang" style={{width: '250px'}} />
        <button>增加</button>
        <div style={{margin: '10px', width: '300px'}}>
          <ul>
            this.data.map((item, index) => {
              <li key={index}>{item}</li>
            })
          </ul>
        </div>
      </div>
     );
  }
}
 
export default App;