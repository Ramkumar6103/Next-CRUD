"use client";
import React from "react";

type Props = {
  title: string;
  id: number;
};

const Card = ({ title, id }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-white border border-zinc-300 rounded-xl shadow-md p-6 w-64 h-40 hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-xl font-semibold text-zinc-800 text-center">
        {title}
      </h1>
      <p className="text-sm text-zinc-500">ID: {id}</p>
    </div>
  );
};

export default Card;
