module.exports = (req, res, next) => {
  try {
    if (!req.header.auth) {
      return next();
    }
    const { accessToken, refreshToken } = req.headers.auth || req.cookies;

    if (accessToken || refreshToken) {
      return res.status(403).send({
        errorMessage: '이미 로그인이 되어있습니다.',
      });
    }
    next();
  } catch (error) {
    console.trace(error);
    return res.status(400).send({
      errorMessage: '잘못된 접근입니다.',
    });
  }
};