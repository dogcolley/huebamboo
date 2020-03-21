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
  });

 //functions 
 Refresh = () => { //refresh App;
     
 }

 Login = () =>{
   //userId
   //userPw

 }

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

 ClickLS = () => {

 }

 ChangeTheme = () => {

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
  
  action = action(() => {
      this.store.a++;
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
