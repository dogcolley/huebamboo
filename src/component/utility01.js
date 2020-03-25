import React,{useContext,useState,useEffect} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
import { set } from 'mobx';

const utility01 = observer(() => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;

    
    return (
        
        <div className="T_ps_ab clear T_wd_full T_pd_Pwd5" style={{top:2+'%',left:0}}>
            <button className="T_mg_Prt2" onClick={useStores.Refresh}>새로고침</button>
            <button className="T_mg_Prt2" onClick={useStores.changeNick}>닉로그인</button>
            <button onClick={useStores.Declaration}>신고하기</button>
            <button className="T_fl_rt" onClick={useStores.changeTheme}>야간테마</button>
        </div>
    )
});

export default utility01