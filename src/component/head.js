import React from 'react';
import NavM from './navM';
import { observer } from "mobx-react-lite"
//add Store
import { useStores } from '../useStores';
const Head = observer(() => {
  return(
    <header>
        <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
        <NavM/>
    </header>
  );
})

export default Head;