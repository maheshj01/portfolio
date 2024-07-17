"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { useDarkMode } from "../contexts/AppThemeProvider";

export function DropdownMenuButton({ options, selected, onClick }: { options: number[], selected: string, onClick: (value: number) => void }) {
    const { darkMode } = useDarkMode();
    const className = darkMode ? 'hover:bg-gray-200 hover:text-black' : 'hover:bg-gray-100'
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center mb-1">
                    <p className="text-blue-700 dark:text-white font-bold flex justify-center text-center text-xl"> {selected}</p> <IoIosArrowDown className="w-4 h-4 dark:text-white" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-2">
                {
                    options.map((option) => {
                        return (
                            <DropdownMenuItem
                                className={`cursor-pointer dark:text-white flex text-lg  ${selected == option.toString() ? 'bg-gray-200 hover:bg-gray-200 dark:text-black hover:dark:bg-gray-100' : 'hover:bg-gray-200'}`}
                                key={option}
                                onClick={onClick.bind(null, option)}
                            > {option}</DropdownMenuItem>
                        )
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
