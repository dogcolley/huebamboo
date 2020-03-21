import React,{useContext,useState,useEffect} from 'react';
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
import NavM from './navM';



const Head = observer(() => {


  const store = useContext(UseStoreContext);
  const [device,setDevice] = useState(store.device);

  window.addEventListener("resize", () =>{
    store.updateDevice(store);
    setDevice(store.device);
  });

  window.addEventListener("load", () =>{
    store.updateDevice(store);
    setDevice(store.device);
  });
  
  useEffect(() => {
    //여기서 hook mount 작업이 진행이 된다.
    //console.log('resize event use');
  });

  return(
    <>
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        { store.device == 'M' ?  <NavM/> : ''}
    </header>
    </>
  );
})

export default Head;