import React,{useContext,useState} from 'react';
import {UseStoreContext} from '../useStores';

const NavM = () => {

    const useStores = useContext(UseStoreContext);
    const store = useStores.store;
    const [theme,setTheme] = useState(store.bgTheme);

    const changeTheme = () =>{
        const a = useStores.changeTheme(store);
        setTheme(a);
    }

    
    return (
        <nav className="navM PT_ds_non T_ps_fx" style={{
            bottom:4+'%',
            left:0,
            right:0,
            margin: '0 auto',
            zIndex:99,
            background: 'pink',
        }}>
            <ul>
                <li><button type="button" onClick={useStores.refresh}>새로고침</button></li>
                <li><button type="button" onClick={changeTheme}>테마변경</button></li>
                <li><button type="button" onClick={useStores.changeNavM()}>최신글보기</button></li>
                <li><button type="button" onClick={useStores.changeNavM()}>히스토리보기</button></li>
            </ul>
        </nav>
    )
} 

export default NavM;