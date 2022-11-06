// src/pages/Login/Login_Find.js

const Login_Find = ()=> {
    return (
        <div>
             <div>
                <img alt="txtLogo" src="./images/로고글씨(한줄버전).png"></img>
            </div>
            <div>
                <b>아이디 찾기</b>
                <b>비밀번호 찾기</b>
            </div>
            <div>
                <input placeholder="가입된 이메일"></input>
                가입되지 않은 이메일입니다.
            </div> 
            <div>
                <input placeholder="사용자 이름"></input>
            </div>
            입력하신 아이디와 비밀번호가 일치하지 않습니다.
            <div>아이디 찾기</div>
            <div>
                <li>
                    <ol>※ 가입된 아이디가 있을 경우, 입력하신 이메일로 아이디를 안내해 드립니다.</ol>
                    <ol>※ 만약 이메일이 오지 않는다면, <br></br>
                            스팸 편지함으로 이동하지 않았는지 확인해주세요.</ol>
                    <ol>※ 이메일 서비스 제공자 사정에 의해 즉시 도착하지 않을 수 있으니,
                            최대 30분 정도 기다리신 후 다시 시도해주세요.</ol>
                </li>
            </div>
        </div>
    );
}

export default Login_Find