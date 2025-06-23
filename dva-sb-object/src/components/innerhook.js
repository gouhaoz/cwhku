import Localhook from '../components/localhook';
import { message } from 'antd';
import { useState,useCallback } from 'react';


function Useinhook(dispatch){

    const { get,set,sumfun,getsum,clear } = Localhook(dispatch);  

    const [btn,setbtn]=useState(false);


    function sum(){
        dispatch({
            type:'goodlist/setpricesum',
            payload:sumfun()
        })
        dispatch({
            type:'goodlist/setarr',
            payload:get()
        })
    }

  function jia(id,price, num) {
    const newUserList = get();
    const currentValue = newUserList[id] || 0;
    
    if (currentValue >= num*price) {
      message.info('商品不够了！');
      return;
    }

    newUserList[id] = currentValue + price;
    console.log(newUserList);
    set(newUserList)
    sum()
  }

  function jian(id,price) {
    const newUserList = get();
    const currentValue = newUserList[id] || 0;
    
    if (currentValue <= 0) {
      return;
    }

    newUserList[id] = currentValue - price;
    console.log(newUserList);
    set(newUserList)
    sum()
  }

  function cleargood(arr){
    const newUserList = get();

    for(let item of arr){
        newUserList[item]=0
    }
    set(newUserList)
    sum()
  }

    return {jia,jian,cleargood}
}


export default Useinhook
