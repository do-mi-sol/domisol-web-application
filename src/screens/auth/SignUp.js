import React, {Component} from 'react'

export default class SignUp extends Component {
    state = {
        id: '',
        email: '',
        name: '',
        password: '',
        checkpassword: '',
    }

    // python의 range함수와 동일한 역할 (->연령에 사용)
    range = (start, end) => {
        var arr = []
        var length = end - start
        for (var i = 0; i <= length; i++) {
            arr[i] = start
            start++
        }
        return arr
    }
    //age 만들기 위해 사용
    make_ageArr = () => {
        const listItems = this.range(10, 100).map((age) => (
            <option value={age} key={age.toString()}>
                {age}
            </option>
        ))
        return listItems
    }

    render() {
        const {id, email, name, password, checkpassword} = this.state

        return (
            <form className="">
                <div>
                    <input type="id" placeholder="ID" onChange={id} />
                    <button>중복확인</button>
                </div>

                <div>
                    <input
                        type="text"
                        className=""
                        placeholder="USER NAME"
                        onChange={name}
                    />
                    <button>중복확인</button>
                </div>

                <div>
                    <input
                        type="password"
                        className=""
                        placeholder="PASSWORD"
                        onChange={password}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className=""
                        placeholder="Confirm PASSWORD"
                        onChange={checkpassword}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="EMAIL"
                        onChange={email}
                    />
                </div>
                <div>
                    <div>
                        <span className="">성별</span>
                        <input
                            type="radio"
                            name="gender"
                            value="남자"
                        />
                        남성
                        <input
                            type="radio"
                            name="gender"
                            value="여자"
                        />
                        여성
                    </div>

                    <div className="">
                        <span className="">연령</span>
                        <select className="">
                            <this.make_ageArr />
                        </select>
                    </div>
                </div>

                <button className="">Sign Up</button>
            </form>
        )
    }
}
