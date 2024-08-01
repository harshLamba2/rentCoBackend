export const authenticateUser = async (req, res, next) => {
  try {
    let { userType, userName, password } = req.body;
    console.log(userType, userName, password);
    res.sendStatus(200);
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
