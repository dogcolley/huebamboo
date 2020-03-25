import React,{useContext,useState,useEffect} from 'react';
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
import NavM from './navM';



const Head = observer(() => {

  return(
    <>
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        { //store.device == 'M' ?  <NavM/> : ''
        }
    </header>
    </>
  );
})

export default Head;