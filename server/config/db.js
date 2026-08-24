import pg from "pg";

export const db = new pg.Client({
    connectionString: process.env.DATABASE_URL,
});

export const connectDB = async () => {
    try {
        await db.connect();
        console.log("PostgreSQL Connected");
    } catch (err) {
        console.error(
            "PostgreSQL Connection Failed:",
            err.message
        );
    }
};

