import React from 'react';
import Utility02 from './utility02';
import Utility03 from './utility03';

const List = (value) => {
    //console.log(value);
    const set_item = value.set_arr;
    return (
        <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
        <div className="T_ps_rl">
          <h4>{set_item.nick} <span className="sound_only">작성자</span></h4>
          <Utility03/>
        </div>
        <p className="T_pd_Pht5">{set_item.contents}</p>
        <Utility02/>
        </li>
    )
}

export default List;