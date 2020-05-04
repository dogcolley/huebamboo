import React,{useContext, useState, useEffect} from 'react';
import {UseStoreContext} from '../useStores';
import { observer,inject,MobXProviderContext } from "mobx-react";

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

const Content  = observer((setID) => {
    const useStore = useContext(UseStoreContext);
    const store = useStore.store;

    useEffect(()=>{},[store.activeHS]);
    
    useEffect(()=>{},[store.activeCM]);
    
    useEffect(()=>{},[store.activeBL]);

    useEffect(()=>{},[store.activeNL]);

    useEffect(()=>{},[store.device]);

    useEffect(()=>{},[store.CommendID]);

    return(
        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          { (store.activeHS) ? <HistoryList setID="historyList"/> : ''}
          { (store.activeCM) ?  <Commend setID="commendList"  wrID = {store.CommendID} /> : ''}
          { (store.device == 'PC' || store.activeBL) ? <BestList  setID="bestList" /> : ''}
          { (store.device == 'PC' || store.activeNL) ? <NewList setID="newList" /> : ''}
        </section>
    )
});

export default Content;