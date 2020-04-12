import React,{useContext,useState,useEffect,useCallback} from 'react'; 
import { observer,inject,MobXProviderContext } from "mobx-react";
import {UseStoreContext} from '../useStores';

const utility02 = observer(() => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const [theme,setTheme] = useState(0);

    const changeState1 = () =>{
        useStores.changeNavM(store,'historyShow');
        let a = theme;
        setTheme(a++);
    }

    return (
<       div className="T_fl_Crt clear T_mg_CPlt2">
            <button type="button" className="" >좋아요</button>
            <button type="button" className="" >싫어요</button>
            <button type="button" className="" >커멘드</button>
        </div>
    )

});

export default utility02;