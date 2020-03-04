import React from 'react';
import './css/App.scss';

function App() {
  return (
    <>  
      <a href="#J_content" id="skipNav">본문바로가기</a>
      <div className="T_ps_rl T_wd_full T_ht_full">
        <header>
          <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
          <nav className="PT_ds_non T_ps_ab">
            <ul>
              <li><button type="button"></button></li>
              <li><button type="button"></button></li>
              <li><button type="button"></button></li>
              <li><button type="button"></button></li>
            </ul>
          </nav>
        </header>

        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          <article id="J_histroy" className="PT_fl_lt PC_wd_P40 T_ht_full">
            <h3>HISTORY</h3>
            <ul className="J_list01">
              <li className="T_ps_rl"> 
                <span>여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</span>
                <div className="T_ps_ab">
                  <button type="button">좋아요</button>
                  <button type="button">싫어요</button>
                  <button type="button">커멘드</button>
                </div>
              </li>
            </ul>
            <from>
              <unput/>
              <button>글작성하기</button>
            </from>
          </article>

          <article id="j_comment" className="T_ds_non">
            <h3>여기에는 뎃글들이 들어갑니다.</h3>
            <ul>
              <li></li>
            </ul>
            <from>
              <unput/>
              <button>댓글입력하기</button>
            </from>
          </article>

          <article id="J_best" className="PT_fl_lt T_ht_full PC_wd_P30">
            <h3>여기엔 베스트글이</h3>
            <ul>
              <li></li>
            </ul>
          </article>
          <article id="J_new" className="PT_fl_lt T_ht_full PC_wd_P30">
            <h3>여기엔 신규글이</h3> 
            <ul>
              <li></li>
            </ul>
          </article>
        </section>
      
        <div className="T_ds_non">
          여기부터는 팝업차이 생성되는 공간입니다.
          [삭제 묻기 및 패스워드 입력문구, 신고 팝업, 로그인 팝업등이 여기에 자리잡습니다.]
        </div>
      </div>
    </>
  );
}

export default App;