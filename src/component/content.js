import React,{useContext, useState, useEffect} from 'react';
import {UseStoreContext} from '../useStores';
/*
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
*/

//component 
import BestList from './listAticle';
import NewList from './listAticle';
import Commend from './sideAticle';
import HistoryList from './sideAticle';

function Content() {
    const useStore = useContext(UseStoreContext);
    const store = useStore.store;
    const [test,setTest]= useState(1);
    window.addEventListener("click", () =>{
      let a = test;
      a ++;
      setTest(a);
    });

    return(
        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          { (store.device !== 'M' || store.activeHS) ? <HistoryList setID="historyList" /> : ''}
          { (store.device == 'PC' || store.activeBL) ? <BestList  setID="bestList" /> : ''}
          { (store.device == 'PC' || store.activeNL) ? <NewList setID="newList" /> : ''}
          { (store.activeCM) ?  <Commend setID="commendList" /> : ''}
        </section>
    )
};

export default Content;