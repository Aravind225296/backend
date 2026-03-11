const authenticateAdmin = (req, res, next) => {
  if (req.session.user?.role === "admin") {
    next();
  } else {
    res.render("auth/login");
  }
};

export default authenticateAdmin;
export { authenticateAdmin };