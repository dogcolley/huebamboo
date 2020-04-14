import React,{useContext,useState, useRef, useCallback, useLayoutEffect, useEffect} from 'react';
///import {Route, Link} from 'react-router-dom'; //if you want router use that <Route path="주소규칙" component={보여 줄 컴퍼넌트} />
import { observer,inject,MobXProviderContext } from "mobx-react";
import './css/App.scss';

/*lib a&& plugin 
import axios  from 'axios'; //use aixos 
import { decorate, observable, action } from 'mobx'; //use mobx type class
import { observer } from "mobx-react-lite" // use mobx type hook
*/

//compunet
import Head from './component/head'; // head in mobile's nav btn's
import Content from './component/content'; //content in bestlist, newlist, histoy, commned
import Aside from './component/aside'; // aside in modal's loign, remove, 신고

//use mobx 
import {UseStoreContext} from './useStores';


//make app here

const App  = observer(() => {
  //setting instant state event and front (window)
  const useStores = useContext(UseStoreContext);
  const store = useStores.store;

  window.addEventListener("resize", () =>{
    useStores.updateDevice(store);
  });

  window.addEventListener("load", () =>{
    useStores.updateDevice(store);
  });

  useEffect(()=>{},[useStores.store.device]);

  useEffect(()=>{},[store.bgTheme]);
  
  useEffect(()=>{},[store.activeAS]);

  return (
    <>  
      <a href="#J_content" id="skipNav">본문바로가기</a>
      <div 
        className={store.device+' ' + store.bgTheme +' T_ps_rl T_wd_full T_ht_full'}
      >
        <Head/> 
        <Content/>
        {
           store.activeAS ? <Aside/> : ''
        }
      </div>
    </>
  );
})

export default App;
