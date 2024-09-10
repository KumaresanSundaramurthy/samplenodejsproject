const redis = require("redis");
require('dotenv').config();

const redisClient = redis.createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
    password: process.env.REDIS_PASSWORD,
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

const redisServer = async () => {
    try {
        await redisClient.connect();
    } catch (error) {
        console.error('Redis error:', error);
    }
};

redisServer();

class CacheService {

    async set(Key, Value, Expiry = 300) {

        try {
            await redisClient.set(Key, Value, {
                EX: Expiry
            });
        } catch (error) {
            console.error('Error setting key:', error);
        }

    }

    async getAll() {
        try {
            return await redisClient.keys("*");
        } catch(error) {
            console.log("Error retrieving all keys: "+error);
        }
    }

    async get(key) {

        try {
            return await redisClient.get(key);
        } catch (error) {
            console.error('Redis operation error:', error);
        }

    }

}

// async function setUserVerify() {
//     try {
//         await redisClient.set("kumaresan-redis", JSON.stringify({ Name: "Testing" }), 300);
//         console.log("Key set successfully");
//     } catch (error) {
//         console.error("Failed to set key:", error); // Consistent error handling
//     }
// }

// setUserVerify();

// async function getUserVerify() {
//     try {
//         const value = await redisClient.get("kumaresan-redis");
//         console.log("Key set successfully: "+value);
//     } catch (error) {
//         console.error("Failed to set key:", error); // Consistent error handling
//     }
// }

// getUserVerify();

// async function getAllRedisData() {
//     try {
//         await redisClient.set("kumaresan-redis", JSON.stringify({ Name: "Testing" }), 300);
//         const getAllRedis = await redisClient.keys("*");
//         console.log(getAllRedis);
//     } catch(error) {
//         console.log("Error retrieving all keys: "+error);
//     }
// }

// getAllRedisData();

module.exports = new CacheService;