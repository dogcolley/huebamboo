import React,{useContext,useState,useEffect} from 'react';
import Lists from './lists2';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const listAticle  = observer((setID) => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const set_id = setID.setID;
    let set_tit = '';

    if(set_id == 'bestList') set_tit = '베스트글';
    if(set_id == 'newList') set_tit = '새로운글';
      
    const chageState = () =>{
      useStores.changeNavM(store,'listChnage');
    }

    useEffect(()=>{
    },[store.activeBL]);

    useEffect(()=>{
    },[store.activeNL]);

    return(
        <article id={set_id} className="PT_fl_lt T_ht_full TAB_wd_P60 PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl U_bd_right01">
        <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5 clear">
          {set_tit}
          {
            (store.device !== 'PC')? 
            <button onClick={chageState} className="T_fl_rt T_ft_rem12">
              { store.activeNL ? '베스트글보기' : '새글보기' }
            </button>
            :
            ''
          }
        </h3>
        <Lists setID={set_id}/>
      </article>
    )
});

export default listAticle;