const auth = {
  login: (cb) => {
    localStorage.setItem('auth', 'user');
    cb();
  },
  logout: (cb) => {
    localStorage.setItem('auth', '');
    localStorage.removeItem('user');
    cb();
  },
};
export default auth;
