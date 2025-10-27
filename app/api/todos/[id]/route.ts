import { db } from "@/lib/db";
import { todos } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function PUT(req: Request, context: any) {
  const params = await context.params; // ✅ Await it!
  const body = await req.json();

  const result = await db
    .update(todos)
    .set({ title: body.title })
    .where(eq(todos.id, Number(params.id)))
    .returning();

  return Response.json(result[0]);
}


export async function GET(_req: Request, context: any) {
  const params = await context.params;
  const item = await db
    .select()
    .from(todos)
    .where(eq(todos.id, Number(params.id)));

  return Response.json(item[0]);
}

export async function DELETE(_req: Request, context: any) {
  const params = await context.params;
  await db
    .delete(todos)
    .where(eq(todos.id, Number(params.id)));

  return Response.json({ message: "Todo deleted!" });
}
