// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "react-bootstrap";
import { useDarkMode } from "../contexts/AppThemeProvider";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { darkMode, toggleDarkMode } = useDarkMode();
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    var iconClass = '';
    if (darkMode) {
        iconClass = 'text-white size-8'
    } else {
        iconClass = 'size-8 text-black'
    }
    return (
        <div>
            <Button aria-label="Light Mode" className='bg-transparent border-none rounded-full p-2'
                onClick={toggleDarkMode}
                size='lg'>
                {darkMode ? <SunIcon className={iconClass} /> : <MoonIcon className={iconClass} />}
            </Button>
        </div>
    )
};