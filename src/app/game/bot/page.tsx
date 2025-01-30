import React from "react";
import Board from "@/components/Board";

export default function BotGame() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <h2 className="text-2xl font-bold mb-4">Гра проти бота</h2>
      <Board />
    </div>
  );
}
