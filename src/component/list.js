import React,{useContext} from 'react';
import Utility02 from './utility02';
import { observer} from "mobx-react";
import {UseStoreContext} from '../useStores';

const List  = observer(() => {
    const useStores = useContext(UseStoreContext);
    const store = useStores.store;

    return (
        <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
            <div href="#" className="T_ds_block "> 
                <a className="T_pd_Pht5">여기에는 뎃글들이 들어갑니다.</a>
                <Utility02/>
            </div>
        </li>
    )
});

export default List;