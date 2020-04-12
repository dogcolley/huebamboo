import React,{useContext, useState, useEffect} from 'react';
import {UseStoreContext} from '../useStores';
/*
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
*/

//component 
import HistoryList from './history';
import BestList from './bestList';
import Commend from './commend';
import NewList from './newList';



function Content() {

    const useStore = useContext(UseStoreContext);
    const store = useStore.store;

    return(
        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          <HistoryList/>
          { (store.device == 'PC' || store.activeBL) ?  <BestList/> : ''}
          { (store.device == 'PC' || store.activeNL) ?  <NewList/> : ''}
          { (store.device == 'PC' || store.activeCM) ?  <Commend/> : ''}
        </section>
    )
};

export default Content;