let host = "http://localhost:3001";

let URL = {
  login: `${host}/api/user/login`,
  signup: `${host}/api/user/signup`,
  account: `${host}/api/user/account`,
  idmodify: `${host}/api/user/account/idmodify`,
  passwordmodify: `${host}/api/user/account/passwordmodify`,
  withdrawal: `${host}/api/user/account/withdrawal`,
  idfind: `${host}/api/user/find/idfind`,
  passwordfind: `${host}/api/user/find/passwordfind`,

};

export default URL