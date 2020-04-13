import React,{useContext, useState, useEffect} from 'react';
import {UseStoreContext} from '../useStores';
import List2 from './list2';
import axios from 'axios';

const Lists = (set_id) => {
    const set_value = set_id.setID;
    const useStore = useContext(UseStoreContext);
    useStore.getList(useStore.store,set_value);
    const store = useStore.store;
    const [arr,setArr] = useState(set_id == 'newList' ? store.newList : store.bestList);

    useEffect(()=>{
      console.log('바뀐다');
    },[set_id == 'newList' ? store.newList : store.bestList]);

    return (
        <ul className="J_list01 PT_ht_P95 T_ov_at U_bg_cfff">
            <List2 set_arr = {arr} />
        </ul>
    )
}

export default Lists;