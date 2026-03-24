const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const while_list = ["/", "/register", "/login"];

  if (while_list.find((item) => "/v1/api" + item === req.originalUrl)) {
    next();
  } else {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      // verify
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
          email: decoded.email,
          name: decoded.name,
          createdBy: "itshark",
        };
        console.log("checkk", decoded);
        next();
      } catch (error) {
        return res.status(401).json({
          message: "token hết hạn / hoặc không hợp lệ",
        });
      }
    } else {
      // return exception
      return res.status(401).json({
        message: "Bạn chưa chuyền access_token ở header/hoặc token hết hạn",
      });
    }
  }
  // if(req?.headers?.authorization?.split(" ")?.[1]) viết tắt
};
module.exports = auth;
