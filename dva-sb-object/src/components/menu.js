import { 
    AppstoreOutlined, 
    MailOutlined, 
    SettingOutlined,
    UnorderedListOutlined ,
    ShoppingCartOutlined,
    DollarCircleOutlined
} from '@ant-design/icons';

import { Menu } from 'antd';
import { connect } from 'dva';
import React, { act, use, useState } from 'react';
// import goodlist from '../models/goodlist';

const App = ({ dispatch,goodlist}) => {

const items = [
     {
    label: '商品列表',
    key: 'list',
    icon: <UnorderedListOutlined />,
  },
  
   {
    label: '购物车',
    key: 'gouwu',
    icon: <ShoppingCartOutlined />,
  },

  {
    label: <span style={{ color: 'red' }}>总价: {(goodlist.pricesum).toFixed(2)}元</span>,
    key: 'Dollar',
    icon: <DollarCircleOutlined  style={{ color: 'red' }}/>,
    disabled: true
  },
];



  const [current, setCurrent] = useState('list');

//   const [url, setUrl]=useUrlState({ page: 'list' });
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    dispatch({
        type:'goodlist/setitem',
        payload:e.key
    })
    // setUrl({ page: e.key });
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default connect((goodlist)=>(goodlist))(App);