import React,{useContext} from 'react';
import Lists from './lists2';
import {UseStoreContext} from '../useStores';

const listAticle = (setID) => {
    const set_id = setID.setID;
    return(
        <article id={setID} className="PT_fl_lt T_ht_full TAB_wd_P60 PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl U_bd_right01">
        <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5">{set_id}</h3>
        <Lists/>
      </article>
    )
}

export default listAticle;