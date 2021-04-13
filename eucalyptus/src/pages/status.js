import React, { Component } from 'react';
import axios from "axios";
import Status_table from "../components/Status_table";
import Subnavigation from "../layout/Subnavigation";
import "./status.css";

class status extends Component{

    constructor(props){
      super(props)
      this.state = {
        statusList: []
      };
    // console.log(props);
    }

    getStatus = async () => {
      const {
          data: { Status }
      } = await axios ({
          method : 'post',
          // url : 'http://210.117.181.118:4848/spring/scoringboard',
        //url: 'http://218.151.66.186:8080/spring/scoringboard',
        url: 'https://luck2901.github.io/react/eucalyptus/src/scoringboard.json',
          // url : 'https://wja0.github.io/react/eucalyptus/src/scoringboard.json',
          data : {
              ID : 'j'
          },
      }).then()
      this.setState( {
          statusList : Status
      } );
      console.log(this.state)
    };

    componentDidMount() {
      this.getStatus();
    }

      render() {
        const { statusList } = this.state;
        return (      
          <div className="Problems">
            <Subnavigation Pnum={statusList.Pnum} />
            <div className="Problems_container">
              <table className="status__table" id="problem">
                <thead>
                  <tr>
                    <th style={{width: "8%"}}>제출 번호</th>
                    <th style={{width: "10%"}}>문제 번호</th>
                    <th style={{width: "10%"}}>아이디</th>
                    <th style={{width: "40%"}}>결과</th>
                    <th style={{width: "10%"}}>언어</th>
                    <th style={{width: "10%"}}>코드 길이</th>
                  </tr>
                </thead>

                {statusList.map(statusList => (
                  <Status_table
                    key={statusList.id}
                    statusList={statusList}
                  />
                ))}
              </table>
            </div>                
          </div>
        );
      }
}

export default status