import React,{useContext,useState} from 'react';
import Lists from './lists';
import Utility01 from './utility01';
import From01 from './from01';

//use mobx 
import {UseStoreContext} from '../useStores';

const History = () => {

        
    const store = useContext(UseStoreContext);
    const [device,setDevice] = useState(store.device);
  


    return(
        <article id="J_histroy" className="PT_fl_lt PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9 PT_ps_rl M_ps_rl M_ds_non ">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5">HISTORY</h3>
            <Lists/>
            <From01/>
            <Utility01/>
      </article>
    )
}

export default History;