import { observable, reaction, action, computed, configure } from 'mobx';
import { MobXProviderContext, inject} from 'mobx-react';
import React,{ createContext } from "react"
import axios from 'axios';

console.log('here mobx make useContext');



export class useStores {

  stores = observable({
    BestList : new Array(),
    NewList : new Array(),
    CommendList : new Array(),
    CommendList2 : new Array(),
    BgTheme : 'wirte', 
    a:1,
    b:2,
  });
  
}


/*
 // 중앙 데이터 관리 테스트 mobxs react 함수형 버전
function useStores() {
  return React.useContext(MobXProviderContext);
}

export default useStores;
*/

/*
const useStores = observable({
  BestList : new Array(),
  NewList : new Array(),
  CommendList : new Array(),
  CommendList2 : new Array(),
  BgTheme : 'wirte', 
  a:1,
  b:2,
});

export const useStoresContext = createContext(new useStores())
*/

/*
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

console.log(UseStore.a);
console.log(UseStore.b);

// **** 특정 값이 바뀔 때 특정 작업 하기!
reaction(
  () => UseStore.a,
  (value, reaction) => {
    console.log(`a 값이 ${value} 로 바뀌었네요!`);
  }
);

reaction(
  () => UseStore.b,
  value => {
    console.log(`b 값이 ${value} 로 바뀌었네요!`);
  }
);

// **** computed 로 특정 값 캐싱 애가 action 비슷한 애인듯
const sum = computed(() => {
  console.log('계산중이예요!');
  return UseStore.a + UseStore.b;
});

sum.observe(() => UseStore.a); // a 값을 주시
sum.observe(() => UseStore.b); // b 값을 주시


//computed 연산된뒤에 작업하기
UseStore.a = 10;
UseStore.b = 20;

//**** 여러번 조회해도 computed 안의 함수를 다시 호출하지 않지만..
console.log(sum.value);
console.log(sum.value);

*/

/*
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
      idx
      commend Num
      contend
      date
      ip
      like
      sad
      pw
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
  */