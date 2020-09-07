import React, {Component} from 'react';
import SignUp from './screens/auth/SignUp';

export default class App extends Component {
  render () {
    return (
      <div>
        <div>도미솔 프로젝트 화이팅! 제발 마지막이 되길..</div>
        <div>한정</div>
        <div>한정</div>
        {/* SignUp 확인 */}
        <SignUp />
      </div>
    );
  }
}
