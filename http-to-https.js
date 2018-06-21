const searchIgnore = (value, ignores) => ignores.some(search => search.test(value));
export default (ignoreHosts = [], ignoreRoutes = [], redirectCode = 302) => {
  return (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https' && !searchIgnore(req.get('host'), ignoreHosts) &&
    !searchIgnore(req.path, ignoreRoutes)) {
      res.redirect(redirectCode, `https://${req.get('host')}${req.url}`);
    } else {
      next();
    }
  };
}