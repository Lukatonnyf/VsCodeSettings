'use client'
import { useState } from "react";

interface ActivitysProps {
    id: number,
    nameActivity: string,
    date?: Date,
    time?: { hour: number; minute: number };
}

const ArrayActivitys: ActivitysProps[] = [
    {
        id: 1,
        nameActivity: "Flexão",
        // date: 11 / 11 / 11,
        // hour: 21
    },
    {
        id: 2,
        nameActivity: "agachamento",
        // date: 11 / 11 / 11,
        // hour: 21
    },
    {
        id: 3,
        nameActivity: "abdominal",
        // date: 11 / 11 / 11,
        // hour: 21
    },
    {
        id: 4,
        nameActivity: "barra",
        // date: 11 / 11 / 11,
        // hour: 21
    },
    {
        id: 5,
        nameActivity: "barra",
        // date: 11 / 11 / 11,
        // hour: 21
    },
    {
        id: 6,
        nameActivity: "barra",
        // date: 11 / 11 / 11,
        // hour: 21
    }
]

export default function Activitys() {
    function showAddition(){
        return (
            <div className="absolute z-10 h-screen w-full">
                <ul className="bg-danger w-full">
    
                 </ul>
            </div>
        )
    }
    
 
 
    return (
        <div className="flex flex-col gap-5 w-full h-[50dvh] p-5 border border-blue-400">
            <button onClick={() => showAddition()} className="w-[30dvh] bg-purple-500 font-semibold text-sm text-gray-100 rounded-2xl p-3 tracking-[1px]">Adicionar Atividade</button>

            <ul className="flex flex-col w-full h-[30dvh]  overflow-y-auto gap-5">
                {
                    ArrayActivitys.map((activitys) => (
                        <li key={activitys.id}
                            className="flex justify-between text-gray-200 w-full  rounded-xl p-2 bg-background-activitys border-1 border-activitys">
                            {activitys.nameActivity}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}