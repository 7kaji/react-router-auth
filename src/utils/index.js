const liff = window.liff;

export const login = () => {
  console.log('login');
  liff.init({ liffId: process.env.REACT_APP_LIFF_ID });
  liff.login();
}

export const logout = () => {
  console.log('logout');
  liff.init({ liffId: process.env.REACT_APP_LIFF_ID });
  liff.logout();
}

export const isLogin = () => {
  console.log('isLogin');
  liff.init({ liffId: process.env.REACT_APP_LIFF_ID });
  return liff.isLoggedIn();
}

