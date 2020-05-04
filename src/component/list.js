import React,{useContext} from 'react';
import Utility02 from './utility02';
import { observer} from "mobx-react";
import {UseStoreContext} from '../useStores';

const List  = observer((value) => {
    /*
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    */
    const set_item = value.set_arr;
    const set_id = value.setID;

    console.log(set_id);
    function createMarkup() {
        return {__html: set_item.contents};
      }
    
    return (
        <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
            <div href="#" className="T_ds_block "> 
            { set_id == 'commendList' ? <p className="T_pd_Pht5" dangerouslySetInnerHTML={createMarkup()} ></p> : '' }
            { set_id !== 'commendList' ? <a className="T_pd_Pht5">여기에는 뎃글들이 들어갑니다.</a> : '' }
                <Utility02 setID={set_id}/>
            </div>
        </li>
    )
});

export default List;