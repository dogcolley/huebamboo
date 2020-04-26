import React,{useContext, useState, useEffect} from 'react';
import {UseStoreContext} from '../useStores';
import List2 from './list2';
import axios from 'axios';
import { observer,inject,MobXProviderContext } from "mobx-react";

const Lists  = observer((set_id) => {
    const set_value = set_id.setID;
    const useStore = useContext(UseStoreContext);
    const store = useStore.store;
    const arr = set_id.setID == 'newList' ? store.newList : store.bestList;
    useEffect(()=>{
        console.log('리스트 가져오는중');
    },[set_id == 'newList' ? store.newList : store.bestList]);
    
    return (
        <ul className="J_list01 PT_ht_P95 T_ov_at U_bg_cfff U_ov_at">
            {arr.map((value)=> <List2 set_arr={value} key={value.id} setID={set_id.setID} /> )}
        </ul>
    )
})

export default Lists;