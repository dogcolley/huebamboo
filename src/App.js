import React,{useState, useRef, useCallback, useLayoutEffect} from 'react';
import {Route, Link} from 'react-router-dom'; //if you want router use that <Route path="주소규칙" component={보여 줄 컴퍼넌트} />
import './css/App.scss';
import axios  from 'axios';
import { observable, reaction, computed, autorun } from 'mobx';

//compunet
import Head from './component/head';
import Content from './component/content';
import Aside from './component/aside';

function App() {
  //data setting 
  const BestList = new Array();
  const NewList = new Array();
  const CommendList = new Array();
  const CommendList2 = new Array();
  let BgTheme = 'wirte';

  //window size setting
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  
  //functions 
  const Refresh = () => { //refresh App;
     
  }

  const Login = () =>{
    //userId
    //userPw

  }

  const UpdateCommend = () =>{
    //ip
    //name
    //contend
  }

  const UpdateContent = () =>{
    /*
      idx
      commend Num
      contend
      date
      ip
      like
      sad
      pw
    */
  }
  
  const DeleteContent = () =>{
    //idx
    //pw
  }

  const DeleteCommend = () =>{
    //idx
    //pw

  }

  const UpdateDeclaration = () =>{
    //content
    //ip
    //date

  }

  const GetList = () => {
    //mode
    //idx

    /*
      array ?
      object
        idx
        commend Num
        contend
        date
        ip
        like
        sad
        pw
    */
  }

  const ClickLS = () => {

  }

  const ChangeTheme = () => {

  }

  //function setting window size
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  //setting useEffect window resize
  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

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