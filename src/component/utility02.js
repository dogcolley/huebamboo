import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const utility02 = observer((item) => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;

    useEffect(()=>{},[store.bgTheme]);
    useEffect(()=>{},[store.activeNL]);
    useEffect(()=>{},[store.activeBL]);
    useEffect(()=>{},[store.activeHS]);
    useEffect(()=>{},[store.activeCM]);

    const showCommend = () => {
        useStores.changeNavM(store,'commendShow',item.item_id,item.set_id)
    }

    const addLike = () => {
        useStores.Like(store,item.item_id,item.set_id);
    }

    const addBad = () => {
        useStores.Like(store,item.item_id,item.set_id);
    }

    return (
<       div className="T_fl_Crt clear T_mg_CPlt2">
            <button type="button" className="btn_like" onClick={addLike} >좋아요</button>
            <button type="button" className="btn_bad" onClick={addBad} >싫어요</button>
            <button type="button" className="btn_commend" onClick={showCommend} >커멘드</button>
        </div>
    )

});

export default utility02;