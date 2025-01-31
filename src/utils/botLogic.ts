import { calculateWinner } from "./calculateWinner"

export const getBotMove = (board: string[]): number | null => {
    const avaliableMoves = board
        .map((cell, index) => (cell === null ? index : null))
        .filter(index => index !== null) as number[]

    if (avaliableMoves.length === 0) return null

    for (let move of avaliableMoves) {
        const testBoard = [...board]
        testBoard[move] = '0'
        if (calculateWinner(testBoard) === '0') {
            return move
        }
    }

    for (let move of avaliableMoves) {
        const testBoard = [...board]
        testBoard[move] = 'X'
        if (calculateWinner(testBoard) === 'X') {
            return move
        }
    }

    const randomIndex = Math.floor(Math.random() * avaliableMoves.length)
    return avaliableMoves[randomIndex]
}