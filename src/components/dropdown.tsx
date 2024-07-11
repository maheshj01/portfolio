"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

export function DropdownMenuButton({ options, selected, onClick }: { options: number[], selected: string, onClick: (value: number) => void }) {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className="flex items-center mb-1">

                    <p className="text-blue-700 dark:text-white font-bold flex justify-center text-center text-xl"> {selected}</p> <IoIosArrowDown className="w-4 h-4 dark:text-white" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-8">
                {
                    options.map((option) => {
                        return (
                            <DropdownMenuLabel
                                className="cursor-pointer dark:text-white flex text-lg hover:bg-gray-100 hover:dark:text-black"
                                key={option}
                                onClick={onClick.bind(null, option)}
                            >{option}</DropdownMenuLabel>
                        )
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
