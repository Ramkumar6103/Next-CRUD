import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { eq } from "drizzle-orm";

// ✅ Create + Get All
export async function GET() {
  const allTodos = await db.select().from(todos);
  return Response.json(allTodos);
}

export async function POST(req: Request) {
  const body = await req.json();
  const result = await db
    .insert(todos)
    .values({ title: body.title })
    .returning();

  return Response.json(result[0]);
}
