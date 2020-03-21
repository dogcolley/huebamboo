import React,{useContext,seState, useRef, useCallback, useLayoutEffect} from 'react';
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
  const store = useContext(UseStoreContext);

  //function setting window size
  const updateWidthAndHeight = () => {
    store.win_wd = window.innerWidth;
    store.win_ht = window.innerHeight;
    //window.removeEventListener("resize", updateWidthAndHeight);
  };

  //setting useEffect window resize
  window.addEventListener("resize", updateWidthAndHeight);

  
  return (
    <>  
      <a href="#J_content" id="skipNav">본문바로가기</a>
      <div className="T_ps_rl T_wd_full T_ht_full">
        <Head/> 
        <Content/>
        <Aside/>
      </div>
    </>
  );
}

export default App;
