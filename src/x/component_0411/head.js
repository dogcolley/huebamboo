import React,{useContext,useState,useEffect} from 'react';
import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';
import NavM from './navM';



const Head = observer(() => {

  const useStores = useContext(UseStoreContext);
  
  const store = useStores.store;
  //이게 하단에 들어가는 스테이트가 변화되었을때 들어가는 부분인데 이건 제어가 없을경우엔 빼도 됨
  //const [device,setDevice] = useState(useStores.store.device);
  //const [theme,setTheme] = useState(useStores.store.bgTheme);

  return(
    <>
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        { store.device == 'M' ?  <NavM/> : '' }
    </header>
    </>
  );
})

export default Head;