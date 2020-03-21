import { observable,decorate, reaction , action, computed, configure } from 'mobx';
import { MobXProviderContext, inject} from 'mobx-react';
import React,{ createContext,useState } from "react"
import axios from 'axios';


class UseStore {
  store = observable({
    device : '',
    win_wd : 0,
    win_ht : 0,
    BestList : new Array(),
    NewList : new Array(),
    CommendList : new Array(),
    CommendList2 : new Array(),
    BgTheme : 'wirte', 
    stateM : '',
  });

 //functions 

 //01. state change
 Refresh = () => { //refresh App;
    window.location.reload();
 }

 ChangeTheme = () => {

 }


 //02. window resize event

 updateDevice =  action((store) => {
  store.win_wd = window.innerWidth;
  store.win_ht = window.innerHeight;

  if(store.win_wd >1024) store.device = 'PC';
  else if(store.win_wd > 640) store.device = 'TAB';
  else store.device = 'M';
  //window.removeEventListener("resize", updateWidthAndHeight);
});

//03. mobile Nav click event 
changeNavM = (store, state) =>{
  if(state == '')store.stateM = ''; 
  if(state == '')store.stateM = ''; 
  if(state == '')store.stateM = ''; 
}

//04. use Member [login,logout]

 Login = () =>{
   //userId
   //userPw

 }

//05. list
GetList = () => {
  //mode
  //idx

  //array ?
  //object
  //  idx
  //  commend Num
  //  contend
  //  date
  //  ip
  //  like
  //  sad
  //  pw
}

//06. content control

 UpdateCommend = () =>{
   //ip
   //name
   //contend
 }

 UpdateContent = () =>{
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
 
 DeleteContent = () =>{
   //idx
   //pw
 }

 DeleteCommend = () =>{
   //idx
   //pw
 }

 UpdateDeclaration = () =>{
   //content
   //ip
   //date
 }

 

 ClickLS = () => {

 }



  wicthHue = reaction(
    () => UseStore.a,
    (value, reaction) => {
      console.log(`a 값이 ${value} 로 바뀌었네요!`);
    }
  );

  sum = computed(() => {
    console.log('계산중이예요!');
    return test.a+1;
  });



}


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
