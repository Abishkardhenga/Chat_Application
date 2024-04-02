export const userVerified = async (req, res) => {
  try {
    res.status(200).json({ message: "user verified ", success: true });
  } catch (error) {
    res.status(403).json({ message: error.message, success: false });
  }
};
