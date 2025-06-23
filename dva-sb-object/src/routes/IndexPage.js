import { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { useRequest } from 'ahooks';
import { MinusCircleOutlined, PlusCircleOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Row, Avatar, Card, Button, Alert, message } from 'antd';
import 'antd/dist/antd.css';
import Menu from '../components/menu';
import Sph from '../components/Shoppinghead';
import Slist from '../components/Shoppinglist';
import Localhook from '../components/localhook';
import Localinhook from '../components/innerhook';

const { Meta } = Card;

function IndexPage({ goodlist, dispatch }) {
  // hook内部函数调用
  const { get,set,sumfun,getsum,clear } = Localhook(dispatch);  
  const { jia,jian } = Localinhook(dispatch);

  const { item } = goodlist;

  
  

  const { data, loading, error, run } = useRequest(async () => {
    let res = await fetch('../../public/goodslist.json');
    res = await res.json();
    dispatch({
      type: 'goodlist/setgoods',
      payload: res
    });
    dispatch({
        type:'goodlist/setarr',
        payload:get()
    })

    return res;
  }, {
    manual: true, 
  });

  useEffect(() => {
    if (item === "list" && (!data || data.length === 0)) {
      run();
      sumfun();
      dispatch({
        type: 'goodlist/setpricesum',
        payload: getsum()
      });

    }
  }, [item, run, data]);

    //  clear()
  
  const { goods = [] } = goodlist;

  console.log(goods);
  console.log(data);

  return (
    <div className={styles.App} style={{ width: '920px', overflow: 'hidden' }}>
      <Menu></Menu>
      {/* <button onClick={()=>{clear}}>清除</button> */}
      {loading && 
        <Button type="primary" loading>
          加载中...
        </Button>
      }

      {!loading && item === "list" &&
        <Row gutter={16}>
          <br></br>
          {goodlist.goods.map((item) => {
            return (
              <Col span={8} key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card
                  style={{
                    width: 300,
                    marginBottom: '20px',
                  }}
                  cover={
                    <img
                      alt="example"
                      src={item.img_url}
                      className={styles.img}
                    />
                  }
                  actions={[
                    <MinusCircleOutlined onClick={() => { jian(item.id,item.price) }} />,
                    // 修改：使用对象属性代替 Map 方法
                    (parseInt(goodlist.usearr[item.id]/item.price)  || 0),
                    <PlusCircleOutlined onClick={() => (jia(item.id,item.price,item.num))} />,
                  ]}
                >
                  <Meta
                    title={`商品：${item.name}`}
                    description={`数量：${item.num}, 价格：￥${item.price}`}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      }

      {!loading && item === "gouwu" &&
        <div>
          <Sph></Sph>
          <Slist></Slist>
        </div>
      }
    </div>
  );
}

export default connect(
  ({ goodlist }) => ({ goodlist })
)(IndexPage);