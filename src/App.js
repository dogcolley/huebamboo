import React,{useContext,useState, useRef, useCallback, useLayoutEffect, useEffect} from 'react';
///import {Route, Link} from 'react-router-dom'; //if you want router use that <Route path="주소규칙" component={보여 줄 컴퍼넌트} />
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
function App() {

  //setting instant state event and front (window)
  const useStores = useContext(UseStoreContext);
  
  const store = useStores.store;
  const [device,setDevice] = useState(useStores.store.device);
  const [theme,setTheme] = useState(useStores.store.bgTheme);

  window.addEventListener("click", () =>{
      setTheme(store.bgTheme);
  });

  window.addEventListener("resize", () =>{
    const a = useStores.updateDevice(store);
    setDevice(a);
  });

  window.addEventListener("load", () =>{
    const a = useStores.updateDevice(store);
    setDevice(a);
  });

  return (
    <>  
      <a href="#J_content" id="skipNav">본문바로가기</a>
      <div 
        className={device+' ' + theme +' T_ps_rl T_wd_full T_ht_full'}
      >
        <Head/> 
        <Content/>
        { store.activeAS ? <Aside/> : ''}
      </div>
    </>
  );
}

export default App;
