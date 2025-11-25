import { User } from "../models/User";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "This email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ success: true, message: "User registed successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = bcrypt.compare(password, User.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email and password" });
    }
    return res
      .status(200)
      .json({ success: true, message: "User login successfully" });
  } catch (error) {
    console.log(error);
  }
};
