import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const protect = (roles = []) => {
  // roles can be [] (any logged-in) or ['tutor'] or ['student']
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized" });
    }
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // contains id and role
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    } catch (err) {
      return res.status(401).json({ message: "Token invalid" });
    }
  };
};
//