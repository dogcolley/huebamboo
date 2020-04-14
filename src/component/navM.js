import React,{useContext,useState} from 'react';
import {UseStoreContext} from '../useStores';
import { observer,inject,MobXProviderContext } from "mobx-react";

const NavM  = observer((setID) => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;

    const changeTheme = () =>{
        useStores.changeTheme(store);
    }

    const chageState1 = () =>{
        useStores.changeNavM(store,'listChnage');
    }
    const chageState2 = () =>{
        useStores.changeNavM(store,'historyShow');
    }

    
    return (
        <nav className="navM PT_ds_non T_ps_fx" style={{
            bottom:0+'%',
            left:0,
            right:0,
            margin: '0 auto',
            zIndex:99,
            background: 'pink',
        }}>
            <ul className="clear T_ly_4 T_ft_ct">
                <li><button type="button" onClick={useStores.refresh}>새로고침</button></li>
                <li><button type="button" onClick={changeTheme}>테마변경</button></li>
                <li><button type="button" onClick={chageState1}>
                    {store.activeNL ? '베스트글' : '최신글'}    
                </button></li>
                <li><button type="button" onClick={chageState2}>히스토리보기</button></li>
            </ul>
        </nav>
    )
}); 

export default NavM;