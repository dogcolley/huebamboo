import React from 'react';
import './css/App.scss';

function App() {
  return (
    <>
      <a href="content" id="skipNav">본문바로가기</a>
      테스트 사스 진행중입니다. 아따 이제 되네 
      <div>

      <header>
        <h1>휴월드 대나무소통방입니다.</h1>
        <nav>
          <ul>
            <li><button type="button"></button></li>
            <li><button type="button"></button></li>
            <li><button type="button"></button></li>
            <li><button type="button"></button></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>휴월드 익명게시판</h2>
        <article>
          <h3>여기에는 봤던글들이</h3>
          <ul>
            <li></li>
          </ul>
          <from>
            <unput/>
            <button>글작성하기</button>
          </from>
        </article>

        <article>
          <h3>여기에는 뎃글들이 들어갑니다.</h3>
          <ul>
            <li></li>
          </ul>
          <from>
            <unput/>
            <button>댓글입력하기</button>
          </from>
        </article>

        <article>
          <h3>여기엔 베스트글이</h3>
          <ul>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>여기엔 신규글이</h3> 
          <ul>
            <li></li>
          </ul>
        </article>
      </section>
      
      <div>
        여기부터는 팝업차이 생성되는 공간입니다.
        [삭제 묻기 및 패스워드 입력문구, 신고 팝업, 로그인 팝업등이 여기에 자리잡습니다.]
      </div>

      </div>

    </>
  );
}

export default App;
