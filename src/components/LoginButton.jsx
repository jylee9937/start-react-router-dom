import { withRouter } from "react-router-dom";

export default withRouter(function LoginButton(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push("/");
    }, 1000);
    //로그인 버튼 밖에서의 기능을 넣어주려면 props 밖에 없다.
  }
  return <button onClick={login}>로그인하기</button>;
});
