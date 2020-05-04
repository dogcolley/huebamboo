import React,{useContext,useEffect} from 'react';
import Lists from './lists';
import Utility01 from './utility01';
import From01 from './from01';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';



//import {UseStoreContext} from '../useStores';

const Commend = observer((setID) => {

    
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const set_id = setID.setID;
    let set_name = "";

    if(set_id == 'historyList'){
        set_name = "보았던글";
        useStores.getHistory(store)
    }
    if(set_id == 'commendList'){
        set_name = store.commendTit + "댓글";
        useStores.getCommend(store, store.commendID);
    }

    return(
        <article id="j_comment" className="PT_ps_rl PT_fl_lt M_ps_ab M_wd_full PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9" style={{top:0,left:0,zIndex:80}}>
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5">{set_name} </h3>
            <Lists setID={set_id}/>
            <From01 state ={set_id}/>
            <Utility01/>
        </article>
    )
});

export default Commend;