import pg from "pg";

const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

const connectDB = async () => {
    try {
        await db.connect();
        console.log("PostgreSQL Connected");
    } catch (err) {
        console.error("PostgreSQL Connection Failed:", err.message);
    }
};

connectDB();

export default db;