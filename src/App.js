import React from 'react';
import './css/App.scss';
import axios  from 'axios';



//compunet
import Head from './component/head';
import Content from './component/content';
import Aside from './component/aside';

function App() {
  const testSettimeout = () =>{
    setInterval(function(){
        console.log('test chekcing');
    },2000);
  }  
  testSettimeout();

  let showNav = false;

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