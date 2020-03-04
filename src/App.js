import React from 'react';
import './css/App.scss';
import axios  from 'axios';
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
          <article id="J_histroy" className="PT_fl_lt PC_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9 T_ps_rl">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5">HISTORY</h3>
            <ul className="J_list01 PT_ht_P85 T_ov_at U_bg_cfff">
              <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <a href="#" className="T_ds_block "> 
                  <p class="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                  <div className="T_fl_Crt clear T_mg_CPlt2">
                    <button type="button" className="" onClick="">좋아요</button>
                    <button type="button" className="" onClick="">싫어요</button>
                    <button type="button" className="" onClick="">커멘드</button>
                  </div>
                </a>
              </li>
            </ul>
            <form onSubmit="" id="" className="PT_ht_P10 T_fl_Clt T_pd_Ptop6">
              <input class="IM_bd_all0 T_wd_P80 T_ht_full" name="" value="" id=""/>
              <button className="T_wd_P20 T_ht_full">글작성하기</button>
            </form>
            <div className="T_ps_ab clear T_wd_full T_pd_Pwd5" style={{top:2+'%',left:0}}>
              <button className="T_mg_Prt2">새로고침</button>
              <button className="T_mg_Prt2">닉로그인</button>
              <button>신고하기</button>
              <button className="T_fl_rt">야간테마</button>
            </div>
          </article>

          <article id="j_comment" className="T_ds_non">
            <h3>여기에는 뎃글들이 들어갑니다.</h3>
            <ul>
              <li></li>
            </ul>
            <form>
            <input/>
            <button>댓글입력하기</button>
            </form>
          </article>

          <article id="J_best" className="PT_fl_lt T_ht_full PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl U_bd_right01">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5">여기엔 베스트글이</h3>
            <ul className="J_list01 PT_ht_P95 T_ov_at U_bg_cfff">
            <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <div className="T_ps_rl">
                  <h4>익명A <span className="sound_only">작성자</span></h4>
                  <div class="T_ps_ab" style={{right:0,top:0}}>
                    <button>삭제</button>
                    <button>공유하기</button>
                    <button>신고하기</button>
                  </div>
                </div>
                <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                <div className="T_fl_Crt clear T_mg_CPlt2">
                  <button type="button" className="" onClick="">좋아요</button>
                  <button type="button" className="" onClick="">싫어요</button>
                  <button type="button" className="" onClick="">커멘드</button>
                </div>
              </li>
            </ul>
          </article>
          <article id="J_new" className="PT_fl_lt T_ht_full PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5">여기엔 신규글이</h3> 
            <ul className="J_list01 PT_ht_P95 T_ov_at U_bg_cfff">
              <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <div className="T_ps_rl">
                  <h4>익명A <span className="sound_only">작성자</span></h4>
                  <div class="T_ps_ab" style={{right:0,top:0}}>
                    <button>삭제</button>
                    <button>공유하기</button>
                    <button>신고하기</button>
                  </div>
                </div>
                <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                <div className="T_fl_Crt clear T_mg_CPlt2">
                  <button type="button" className="" onClick="">좋아요</button>
                  <button type="button" className="" onClick="">싫어요</button>
                  <button type="button" className="" onClick="">커멘드</button>
                </div>
              </li>
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

