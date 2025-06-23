

export default {

  namespace: 'goodlist',

  state: {
    goods: [],
    item:"list",
    loadings:false,
    usearr:[],
    delbool:false,
    pricesum:0,
    delarr:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },

    // 商品列表
    setgoods(state, action){
      return {...state,goods:action.payload}
    },


    setitem(state, action){
      return {...state,item:action.payload}
    },

    setpricesum(state, action){
      return {...state,pricesum:action.payload}
    },


    // 设置删除状态
    setdelbool(state, action) {
      return { ...state, delbool: action.payload };
    },


    // 用户操作数据
    setarr(state, action){
      return {...state,usearr:action.payload}
    },

    setdelarr(state, action){
      return {...state,delarr:action.payload}
    }

}

};

