import React,{useContext} from 'react';
import Lists from './lists';
import Utility01 from './utility01';
import From01 from './from01';

//import {UseStoreContext} from '../useStores';


const Commend = () => {
    //const useStore = useContext(UseStoreContext);
    //const store = useStore.store;
    //const classDefault = 'T_ps_ab M_wd_full M_ds_non PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9';
    //const classActive = 'T_ps_ab M_wd_full PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9';
    
    return(
        <article id="j_comment" className="T_ps_ab M_wd_full PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9" style={{top:0,left:0}}>
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5">Commend</h3>
            <Lists/>
            <From01/>
            <Utility01/>
        </article>
    )
}

export default Commend;