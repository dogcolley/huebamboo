import React,{useContext, useState, useEffect} from 'react';
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

  /*
  const test = useContext(UseStoreContext);
  setInterval(() => {
    console.log('content부분: '+ test.store.a);
  }, (1000));
  */

    return(
        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          <HistoryList/>
          <BestList/>
          <NewList/>
          <Commend/>
        </section>
    )
};

export default Content;