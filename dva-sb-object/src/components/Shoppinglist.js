import { Card,Checkbox } from 'antd';
import { useState,useEffect } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from 'dva';
import goodlist from '../models/goodlist';
import Localhook from '../components/localhook';
import Localinhook from '../components/innerhook';
import { it } from 'eslint/lib/testers/rule-tester';


const App = ({goodlist,dispatch}) => {

    const { get,set,sumfun,getsum,clear } = Localhook(); 
    const { jia,jian,cleargood }=Localinhook(dispatch);

    useEffect(()=>{
        dispatch({
            type:'goodlist/setarr',
            payload:get()
        })
    },[])
    

    const [delarr, setdelarr]=useState([]);

    const onChange = (id) => {
        if(delarr.includes(id)){
            let newdelarr=delarr.filter(item=>item!==id)
            setdelarr(newdelarr)
            dispatch({type:'goodlist/setdelarr',payload:newdelarr})
        }
        else{
           let newdelarr=[...delarr,id]
            setdelarr(newdelarr) 
            dispatch({type:'goodlist/setdelarr',payload:newdelarr})
        }

    };



    return(
<div>

{/* 在这用map遍历 */}

    {goodlist.goods.map((item) => (

    goodlist.usearr[item.id]?(
    <div key={item.id} style={{padding: '5px 0px',background: '#ececec',position: 'relative'}}>

        <div style={{background: '#fff',flexDirection:'row',display: 'flex'}}>
        <img style={{width:'100px',height:'100px',margin:'5px'}} src={item.img_url}></img>

        <Card
          title={item.name}
          bordered={false}
          style={{
            width: '100%',
          }}
        >
          <p>价格：{item.price}</p>
          <p>合计：{goodlist.usearr[item.id].toFixed(2)}</p>

          <div style={{flexDirection:'row',display: 'flex'}}>
          <MinusCircleOutlined onClick={() => { jian(item.id,item.price) }} />
          &nbsp; {parseInt(goodlist.usearr[item.id]/item.price) } &nbsp;
          <PlusCircleOutlined  onClick={() => (jia(item.id,item.price,item.num))}/>
          </div>

          {goodlist.delbool &&
          <Checkbox style={{position:'absolute',top:'10px',right:'10px'}} onChange={()=>{onChange(item.id)}}>选中</Checkbox>
          }


        </Card>
        </div>
  </div>
    ):null

  ))}

</div>
)
};
export default connect(({goodlist})=>({goodlist}))(App);