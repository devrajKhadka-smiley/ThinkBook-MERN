import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis/node'

import dotenv from "dotenv";
dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(500, '60 s'),
});

export default ratelimit; 