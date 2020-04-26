import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import List from './list';
import { observer} from "mobx-react";
import {UseStoreContext} from '../useStores';

const Lists =  observer((arr) => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    return (
        <ul className="J_list01 PT_ht_P75 T_ov_at U_bg_cfff M_ht_P80">
            <List/>
        </ul>
    )
});

export default Lists;