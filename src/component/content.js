import React from 'react';

//component 
import HistoryList from './history';
import BestList from './bestList';
import Commend from './commend';
import NewList from './newList';



const Content = () => {
    return(
        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          <HistoryList/>
          <BestList/>
          <NewList/>
          <Commend/>
        </section>
    )
}

export default Content;