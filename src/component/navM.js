import React,{useContext,useState} from 'react';
import {UseStoreContext} from '../useStores';

const NavM = () => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const [theme,setTheme] = useState(store.bgTheme);
    let a = 0;

    const changeTheme = () =>{
        useStores.changeTheme(store);
        a++;
        setTheme(a);
    }

    const chageState1 = () =>{
        useStores.changeNavM(store,'listChnage');
        a++;
        setTheme(a);
    }
    const chageState2 = () =>{
        useStores.changeNavM(store,'historyShow');
        a++;
        setTheme(a);
    }

    
    return (
        <nav className="navM PT_ds_non T_ps_fx" style={{
            bottom:0+'%',
            left:0,
            right:0,
            margin: '0 auto',
            zIndex:99,
            background: 'pink',
        }}>
            <ul className="clear T_ly_4 T_ft_ct">
                <li><button type="button" onClick={useStores.refresh}>새로고침</button></li>
                <li><button type="button" onClick={changeTheme}>테마변경</button></li>
                <li><button type="button" onClick={chageState1}>
                    {store.activeNL ? '베스트글' : '최신글'}    
                </button></li>
                <li><button type="button" onClick={chageState2}>히스토리보기</button></li>
            </ul>
        </nav>
    )
} 

export default NavM;