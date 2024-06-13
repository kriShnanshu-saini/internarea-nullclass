import dotenv from 'dotenv';
import connectDB from './db/index.js';
import {app} from "./app.js";

dotenv.config({ path: './.env' });
// dotenv.config();
const PORT = process.env.PORT || 8000;


// Connect db and start server
(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
    } catch (err) {
        console.log("MONGO_DB CONNECTION FAILED: \n", err);
    }
})();