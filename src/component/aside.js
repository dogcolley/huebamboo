import React from 'react'; 

const Aside = () => {
    return (
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

    )

}

export default Aside;