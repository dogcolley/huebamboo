import React,{useContext,useState} from 'react';
import NavM from './navM';
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';



const Head = observer(() => {

  const test = useContext(UseStoreContext);

  // **** computed 로 특정 값 캐싱 애가 action 비슷한 애인듯
  

  //const {test1, test2} = useStores();
  //const store = useContext(useStoresContext);
  //const store = new useStores();
  //console.log(stores);
  return(
    <>
    <button type="button" style={{
      textAlign:'center',
      color:'#000',
      width:100+'%'
    }} onClick={test.action}>테스트 {test.store.a}</button>
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        <NavM/>
    </header>
    </>
  );
})

export default Head;