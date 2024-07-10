"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function DropdownMenuButton({ options, selected, onClick }: { options: number[], selected: string, onClick: (value: number) => void }) {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <p className="text-blue-700 dark:text-white font-bold flex justify-center text-center text-xl mt-1"> {selected}</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-16">
                {
                    options.map((option) => {
                        return (
                            <DropdownMenuLabel
                                className="cursor-pointer dark:text-white font-bold flex text-lg hover:bg-gray-100 hover:dark:text-black"
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
