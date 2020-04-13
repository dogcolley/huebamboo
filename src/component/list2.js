import React from 'react';
import Utility02 from './utility02';
import Utility03 from './utility03';

const List = (setArr) => {
    const arr = setArr.set_arr;
    console.log(arr[0]);
    return (
        <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
        <div className="T_ps_rl">
          <h4>익명A <span className="sound_only">작성자</span></h4>
          <Utility03/>
        </div>
        <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
        <Utility02/>
        </li>
    )
}

export default List;