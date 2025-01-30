'use client'
import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-700">
      <h1 className="text-3xl font-bold">Хрестики-Нулики</h1>
      <Link href='/game/bot'>
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Грати проти бота
        </button>
      </Link>
      <Link href='/game/multiplayer'>
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Грати 1v1
        </button>
      </Link>
    </div>
  )
}
