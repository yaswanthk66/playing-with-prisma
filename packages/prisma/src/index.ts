import "dotenv/config"
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "./generated/client/client.js";

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaNeon({ connectionString })
export const client = new PrismaClient({ adapter});

