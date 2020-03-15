import React from 'react';
import NavM from './navM';
import { observer,inject,MobXProviderContext } from "mobx-react";
import {useStores} from '../useStores';

const Head = observer(() => {
  //const {test1, test2} = useStores();
  //const store = useContext(useStoresContext);
  const store = new useStores();
  console.log(stores);
  return(
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        <NavM/>
    </header>
  );
})

export default Head;