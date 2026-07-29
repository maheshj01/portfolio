"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

export function DropdownMenuButton({ options, selected, onClick, className }: { className: string, options: number[], selected: string, onClick: (value: number) => void }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button type="button" className="mb-1 flex cursor-pointer items-center gap-1 text-[var(--brand)]">
                    <span className={`font-mono font-semibold ${className}`}>{selected}</span>
                    <IoIosArrowDown className="h-4 w-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[5rem] border border-[var(--rule)] bg-[var(--surface)]">
                {
                    options.map((option) => {
                        const isSelected = selected === option.toString();
                        return (
                            <DropdownMenuItem
                                className={`cursor-pointer font-mono text-[var(--ink)] focus:bg-[var(--surface-2)] ${isSelected ? 'bg-[var(--brand-tint)] text-[var(--brand)]' : ''}`}
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
