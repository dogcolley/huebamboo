import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const utility03 = observer((item) => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
  
    const delItem = () => {
        useStores.deleteContent(store,item.item_id,item.set_id)
    }


    return(
    <div className="T_ps_ab" style={{right:0,top:0}}>
        <button onClick={delItem}>삭제</button>
        <button>공유하기</button>
        <button>신고하기</button>
      </div>

    )
});

export default utility03