

function Usehook(dispatch){
    function get(){
        const data = localStorage.getItem('usergoods');
        if (data && data !== '') {
          return JSON.parse(data);
        }
        return {};
    }

    function set(list){ 
        localStorage.setItem('usergoods',JSON.stringify(list))
    }

    function sumfun(){
        // let sum=0
        let arr=get()
        const sum = Object.values(arr).reduce((total, num) => total + num, 0);
        localStorage.setItem('sum',JSON.stringify(sum))
        return sum
    }

    // 获取总价
    function getsum(){
        const data = localStorage.getItem('sum');
        if (data && data !== '') {
          return JSON.parse(data);
        }
        return 0;
    }

    function clear(){
        localStorage.setItem('usergoods',JSON.stringify({}))
        localStorage.setItem('sum',JSON.stringify(0))
        dispatch({
            type:'goodlist/setpricesum',
            payload:0
        })
    }

    return {get,set,sumfun,getsum,clear}

}

export default Usehook;
