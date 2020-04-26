import React from 'react';
import Utility02 from './utility02';
import Utility03 from './utility03';

const List = (value) => {
    const set_item = value.set_arr;

    function createMarkup() {
      return {__html: set_item.contents};
    }
    
    return (
        <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
        <div className="T_ps_rl">
          <h4>{set_item.nick} <span className="sound_only">작성자</span></h4>
          <Utility03 item_id = {set_item.id} set_id = {value.setID}/>
        </div>
        <p className="T_pd_Pht5" dangerouslySetInnerHTML={createMarkup()} ></p>
        <Utility02  item_id = {set_item.id}  set_id = {value.setID}/>
        </li>
    )
}

export default List;