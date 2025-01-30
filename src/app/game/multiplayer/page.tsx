import Board from "@/components/Board";

export default function MultiplayerGame() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <h2 className="text-2xl font-bold mb-4">Гра 1v1</h2>
      <Board />
    </div>
  );
}
