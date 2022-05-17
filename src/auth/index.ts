const auth = {
  login: (cb: VoidFunction): void => {
    sessionStorage.setItem('auth', 'user');
    cb();
  },
  logout: (cb: VoidFunction): void => {
    sessionStorage.clear();
    cb();
  },
};
export default auth;
