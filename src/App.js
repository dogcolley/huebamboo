import React from 'react';
import './css/App.scss';
import {post}  from 'axios';
function App() {
  return (
    <>  
      <a href="#J_content" id="skipNav">본문바로가기</a>
      <div className="T_ps_rl T_wd_full T_ht_full">
        <header>
          <h1><span className="sound_only">휴월드 대나무소통방입니다.</span></h1>
          <nav className="PT_ds_non T_ps_ab U_mg_ct U_bg_cfff U_bd_rd" style={{bottom:10,left:0,right:0,height:0,width:40,height:40,zIndex:100}}>
            <ul className="T_ps_ab T_ds_Cinbl T_mg_CPwd2 T_ft_ct" style={{bottom:'115%',minWidth:320,marginLeft:-140}}>
              <li className="U_bg_cfff U_bd_rd" style={{width:40,height:40}}><button type="button"></button></li>
              <li className="U_bg_cfff U_bd_rd" style={{width:40,height:40}}><button type="button"></button></li>
              <li className="U_bg_cfff U_bd_rd" style={{width:40,height:40}}><button type="button"></button></li>
              <li className="U_bg_cfff U_bd_rd" style={{width:40,height:40}}><button type="button"></button></li>
            </ul>
          </nav>
        </header>

        <section id="J_content" className="clear T_ht_full">
          <h2 className="sound_only">휴월드 익명게시판</h2>
          <article id="J_histroy" className="PT_fl_lt PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9 T_ps_rl M_ht_full M_ps_ab M_wd_full" style={{top:0,left:0}}>
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5 M_ht_P5">HISTORY</h3>
            <ul className="J_list01 PT_ht_P85 T_ov_at U_bg_cfff M_ht_P80">
              <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <a href="#" className="T_ds_block"> 
                  <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                  <div className="T_fl_Crt clear T_mg_CPlt2">
                    <button type="button" className="" >좋아요</button>
                    <button type="button" className="" >싫어요</button>
                    <button type="button" className="" >커멘드</button>
                  </div>
                </a>
              </li>
            </ul>
            <form  id="" className="PT_ht_P10 T_fl_Clt T_pd_Ptop6 M_ht_P15">
              <input className="IM_bd_all0 T_wd_P80 T_ht_full" name=""  id=""/>
              <button className="T_wd_P20 T_ht_full">글작성하기</button>
            </form>
            <div className="T_ps_ab clear T_wd_full T_pd_Pwd5 M_ds_non" style={{top:2+'%',left:0}}>
              <button className="T_mg_Prt2">새로고침</button>
              <button className="T_mg_Prt2">닉로그인</button>
              <button>신고하기</button>
              <button className="T_fl_rt">야간테마</button>
            </div>
          </article>


          <article id="j_comment" className="T_ps_ab PT_wd_P40 T_ht_full PT_pd_Pwd2 T_pd_Pht4 U_bg_cf9 M_wd_full M_ht_full" style={{top:0,left:0}}>
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_c000 PT_ht_P5 M_ht_P5">Commend</h3>
            <ul className="J_list01 PT_ht_P85 T_ov_at U_bg_cfff M_ht_P80">
              <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <a href="#" className="T_ds_block "> 
                  <p className="T_pd_Pht5">여기에는 뎃글들이 들어갑니다.</p>
                  <div className="T_fl_Crt clear T_mg_CPlt2">
                    <button type="button" className="" >좋아요</button>
                    <button type="button" className="" >싫어요</button>
                    <button type="button" className="" >커멘드</button>
                  </div>
                </a>
              </li>
            </ul>
            <form  id="" className="PT_ht_P10 T_fl_Clt T_pd_Ptop6 M_ht_P15 ">
              <input className="IM_bd_all0 T_wd_P80 T_ht_full" name=""  id=""/>
              <button className="T_wd_P20 T_ht_full">댓글입력</button>
            </form>
            <div className="T_ps_ab clear T_wd_full T_pd_Pwd5 M_ds_non" style={{top:2+'%',left:0}}>
              <button className="T_mg_Prt2">새로고침</button>
              <button className="T_mg_Prt2">닉로그인</button>
              <button>신고하기</button>
              <button className="T_fl_rt">야간테마</button>
            </div>
          </article>


          <article id="J_best" className="PT_fl_lt T_ht_full PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl U_bd_right01 TAB_wd_P60">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5 M_ht_P5">여기엔 베스트글이</h3>
            <ul className="J_list01 T_ht_P95 T_ov_at U_bg_cfff">
            <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <div className="T_ps_rl">
                  <h4>익명A <span className="sound_only">작성자</span></h4>
                  <div className="T_ps_ab" style={{right:0,top:0}}>
                    <button>삭제</button>
                    <button>공유하기</button>
                    <button>신고하기</button>
                  </div>
                </div>
                <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                <div className="T_fl_Crt clear T_mg_CPlt2">
                  <button type="button" className="" >좋아요</button>
                  <button type="button" className="" >싫어요</button>
                  <button type="button" className="" >커멘드</button>
                </div>
              </li>
            </ul>
          </article>
          <article id="J_new" className="PT_fl_lt T_ht_full PC_wd_P30 PT_pd_Pwd1 T_pd_Pht4 U_bg_c000 T_ps_rl TAB_wd_P60 TM_ds_non">
            <h3 className="PT_ft_sz25 T_ft_wh700 U_ft_cfff PT_ht_P5 M_ht_P5">여기엔 신규글이</h3> 
            <ul className="J_list01 T_ht_P95 T_ov_at U_bg_cfff">
              <li className="T_ps_rl T_pd_Pall5 T_ds_block U_bd_btm01">
                <div className="T_ps_rl">
                  <h4>익명A <span className="sound_only">작성자</span></h4>
                  <div className="T_ps_ab" style={{right:0,top:0}}>
                    <button>삭제</button>
                    <button>공유하기</button>
                    <button>신고하기</button>
                  </div>
                </div>
                <p className="T_pd_Pht5">여기에는 글의 앞부분 2줄이 2줄이 들어갑니다.</p>
                <div className="T_fl_Crt clear T_mg_CPlt2">
                  <button type="button" className="" >좋아요</button>
                  <button type="button" className="" >싫어요</button>
                  <button type="button" className="" >커멘드</button>
                </div>
              </li>
            </ul>
          </article>
        </section>
      
        <div id="popLogin" className="T_ps_ab T_wd_full T_ht_full T_ds_non" style={{background:'rgba(0,0,0,0.7)',top:0,left:0}}>
          <div className="T_wd_full T_ht_full T_ds_table">
            <button type="button" className="T_ps_ab T_wd_full T_ht_full" style={{top:0,left:0}}>닫기</button>
            <div className="U_bg_cfff T_pd_Pwd2 T_pd_Pht6 T_wd_P40 T_ht_P55 T_ps_ab" style={{margin:'auto',minWidth:'300px',maxWidth:'600px',left:0,right:0,top:0,bottom:0}}>
              <h3 className="T_mg_Pbtm5 T_ft_ct PT_ft_sz35 U_ft_c000">여기에 팝업 제목</h3>
              <form>
                <input className="T_mg_Pbtm3 U_bd_all01 T_wd_full T_pd_Pht3 T_pd_Pwd4" />
                <input className="U_bd_all01 T_wd_full T_mg_Pbtm8 T_pd_Pht3 T_pd_Pwd4" />
                <button type="button" className="T_wd_full T_pd_Pht3 T_mg_Pbtm2 U_bg_c000">보내기</button>
                <button type="button" className="T_wd_full T_pd_Pht3 U_bd_all01">닫기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

