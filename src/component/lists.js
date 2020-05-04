import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import List from './list';
import { observer} from "mobx-react";
import {UseStoreContext} from '../useStores';

const Lists =  observer((set_id) => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const mode = set_id.setID;
    const arr = (mode == 'commendList') ? store.commendList : store.historyList;
    return (
        <ul className="J_list01 PT_ht_P75 T_ov_at U_bg_cfff M_ht_P80">
            {arr.map((value)=> <List set_arr={value} key={value.id} setID={mode} /> )}
        </ul>
    )
});

export default Lists;