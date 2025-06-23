import { Checkbox, InputNumber, Space,Row,Col,Switch,Button } from 'antd';
import { connect } from 'dva';
import React, { useState,useEffect } from 'react';
import Localinhook from '../components/innerhook';



const App = ({ goodlist, dispatch }) => {
  const [keyboard, setKeyboard] = useState(false);
  const { jia,jian,cleargood }=Localinhook(dispatch);

  

  function setKey(){
    setKeyboard(!keyboard)
    dispatch({
      type:'goodlist/setdelbool',
      payload:!keyboard
    })
  }

  function del(){
    cleargood(goodlist.delarr)
  }

  return (
    <Row>
      <Col span={24} style={{
        padding:'12px',
        borderBottom:'1px solid #eee',
        flexDirection:'row',
        display:'flex',
        lineHeight:'225%',
        }}>
        &nbsp; 
        <Switch  onChange={setKey} style={{marginTop:'5px'}} checked={goodlist.delbool}  /> &nbsp; 
          <p style={{height:'32px',margin:0}}>批量删除</p> &nbsp;&nbsp; 
        {goodlist.delbool && <Button onClick={del} style={{marginLeft:'20px'}} danger>删除</Button>}
        
      </Col>
    </Row>
  );
};
export default connect(({ goodlist }) => ({ goodlist }))(App);