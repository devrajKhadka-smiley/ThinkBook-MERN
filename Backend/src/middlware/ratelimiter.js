import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    // const { success } = await ratelimit.limit("my-limit-key");
    // const { success } = await ratelimit.limit("userid");
    const { success } = await ratelimit.limit(ip);
    console.log("Rate limit check for IP:", ip);
    if (!success) {
      return res.status(429).json({
        message: "Too many request, please try again later.",
      });
    }
    next();
  } catch (error) {
    console.error("Rate limiter error:", error.message);
    next();
  }
};
export default ratelimiter;
