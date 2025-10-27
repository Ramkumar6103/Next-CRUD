import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",   // ✅ required in latest versions
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ✅ new key
  },
});
