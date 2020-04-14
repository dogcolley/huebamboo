import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { MobXProviderContext, inject} from 'mobx-react';
import React,{ createContext,useState } from "react"
import axios from 'axios';


class UseStore {
  store = new Object({
    test:'',
    device : "PC",
    win_wd : 0,
    win_ht : 0,
    bestList : new Array(),
    newList : new Array(),
    commendList : new Array(),
    commendList2 : new Array(),
    bgTheme : 'wirte', 
    stateM : '',
    activeCM : false, //commend
    activeNL : true, //new
    activeBL : false, //best
    activeHS : true, // history
    activeAS : false, // side
    APIURL : 'http://13.209.3.125:4000/api/'
  });

 //functions 
 
 //00. maker state lists 
 maker = (setID) => {

 }


 //01. state change
 refresh = () => { //refresh App;
    window.location.reload();
 }
 
 changeTheme = (store) => {
    store.bgTheme = store.bgTheme == 'wirte' ? 'dark' : 'wirte';
    return store.bgTheme;
  };


 //02. window resize event
 updateDevice = (store) => {
  store.win_wd = window.innerWidth;
  store.win_ht = window.innerHeight;
  if(store.win_wd >1024) store.device = 'PC';
  else if(store.win_wd > 768) store.device = 'TAB';
  else store.device = 'M';

  store.activeHS = store.win_wd > 768 ? true : false

  return store.device;
};

//03. mobile Nav click event 
changeNavM = (store, state) => {
  if(state == 'listChnage'){
    if(store.device =="M" && (store.activeCM || store.activeHS)){
      store.activeCM = false;
      store.activeHS = false;
    }else{
      store.activeNL = store.activeNL ? false : true;
      store.activeBL = store.activeBL ? false : true;
    }
  } 
  if(state == 'historyShow'){
    store.activeHS = true;
    store.activeCM = false;
  } 
  if(state == 'commendShow'){
    store.activeCM = true;
    store.activeHS = false;
  }
}

openDcrt = (store) => {
  store.activeAS = true;
}

clearDcrt = (store) => {
  store.activeAS = false;
}

//04. use Member [login,logout]

 login = () =>{
   console.log('login join...');
   return 'test';
 }

//05. list
getList = (store, mode = 'newList') => {
  const arr = new Array();
  axios({
    method: 'get',
    url: `http://13.209.3.125:4000/api/post/list`,
    headers: { 'Access-Control-Allow-Origin': true },
  })
  .then(response => {
      if(mode == 'newList'){
        store.newList = [];
        store.newList = response.data.data;
      }else if(mode == 'bestList'){
        store.bestList = [];
        store.bestList = response.data.data;
      }
      /*
      for(let i=0;i<response.data.data.length;i++){
        if(mode == 'newList'){
          store.newList.push(response.data.data[i]);
        }else if(mode == 'bestList'){
          store.bestList.push(response.data.data[i]);
        }
      }
      */
  })
  .catch(err => console.log('err', err));

  console.log('??');
}

//06. content control

 updateCommend = () =>{
   //ip
   //name
   //contend
 }

 updateContent = () =>{
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
 
 deleteContent = () =>{
   //idx
   //pw
 }

 deleteCommend = () =>{
   //idx
   //pw
 }

 clickLS = () => {

 }

  //이게 이벤트가 끝나고 싷행되는 부분
  wicthHue = () => {
    /*
    UseStore.store , (value, reaction) =>{
      console.log(`a 값이 ${value} 로 바뀌었네요!`);
    }
    */
  }
}


decorate(UseStore , {
  store: observable,
  changeTheme: action,
  updateDevice: action,
  getList: action
  /*
  sum : computed
  wicthHue : reaction,
  */
});

/* 
//데코레이터 부분을 여기로 추가다 만약에 대코레이터를 사용하지않을경우에는 eject나 babel로 설정해서 @를 사용하는 문법을 쓰면 된다.
// decorate(지정클래스 , { 
//  함수명 : mobx 대코,
// reaction, computed , action , observable
//})
*/


export const UseStoreContext = createContext(new UseStore());




/*
 // 중앙 데이터 관리 테스트 mobxs react 함수형 버전

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}
*/
