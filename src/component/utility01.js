import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const utility01 = observer(() => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    
    const changeTheme = () =>{
        useStores.changeTheme(store);
    }

    const changeState1 = () =>{
        useStores.changeNavM(store,'historyShow');
    }

    const openDeclaration = () =>{
        useStores.openDcrt(store);
    }

    useEffect(()=>{},[store.bgTheme]);
    useEffect(()=>{},[store.activeNL]);
    useEffect(()=>{},[store.activeBL]);
    useEffect(()=>{},[store.activeHS]);
    useEffect(()=>{},[store.activeCM]);


    return (
        
        <div className="T_ps_ab clear M_fl_Crt T_wd_full T_pd_Pwd5" style={{top:2+'%',left:0}}>
            <button className="M_mg_Plt2 PT_mg_Prt2" onClick={useStores.refresh}>새로고침</button>
            <button className="M_mg_Plt2 PT_mg_Prt2" onClick={useStores.changeNick}>닉로그인</button>
            <button onClick={openDeclaration}>신고하기</button>
            <button className="T_fl_rt M_mg_Prt2" onClick={changeTheme}>야간테마</button>
            <button className="T_fl_rt T_mg_Prt2" onClick={changeState1}>기록보기</button>
        </div>
    )
});

export default utility01