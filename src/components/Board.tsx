'use client'
import { useState } from "react"
import { calculateWinner } from "@/utils/calculateWinner"

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState(true)
    const winner = calculateWinner(board)
    const isDraw = board.every(cell => cell !== null)

    function handleClick(index: number) {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = isNext ? 'X' : '0'
        setBoard(newBoard)
        setIsNext(!isNext)
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsNext(true)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="w-16 h-16 border text-2xl flex items-center justify-center"
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            {winner && <p className="text-xl mt-4">Переможець: {winner}!</p>}
            {isDraw && !winner && <p className="text-xl mt-4">Нічия!</p>}

            {(winner || isDraw) && (
                <button className="mt-4 px-4 py-2 bg-black text-white rounded" onClick={resetGame}>
                    Грати знову
                </button>
            )}
        </div>
    )
}