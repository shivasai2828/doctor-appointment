import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res
        .status(401)
        .json({ success: false, message: "Token not provided" });
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET_KEY);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default authAdmin;
