"use client";

import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

export default function TodoList() {
  const [data, setData] = useState<Todo[]>([]);

  async function fetchTodos() {
    try {
      const res = await axios.get("/api/todos");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex min-h-screen text-black bg-zinc-50 font-sans">
      {data.map((todo) => (
        <Card key={todo.id} title={todo.title} id={todo.id} />
      ))}
    </div>
  );
}
