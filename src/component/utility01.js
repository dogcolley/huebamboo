import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const utility01 = observer(() => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const [theme,setTheme] = useState(store.bgTheme);

    const test = () =>{
        const a = useStores.changeTheme(store);
        setTheme(a);
    }

    const changeTheme = useCallback(e => {

    });

    return (
        
        <div className="T_ps_ab clear T_wd_full T_pd_Pwd5" style={{top:2+'%',left:0}}>
            {/*
            <button className="T_mg_Prt2" onClick={useStores.Refresh}>새로고침</button>
            <button className="T_mg_Prt2" onClick={useStores.changeNick}>닉로그인</button>
            <button onClick={useStores.Declaration}>신고하기</button>
            */
            }
            <button className="T_fl_rt" onClick={test}>야간테마{theme}</button>
        </div>
    )
});

export default utility01