import './ThemeToggle.css';
import { MdWbSunny } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    useMediaQuery(
        {
            query:"(prefers-color-scheme: dark)",
        },
        undefined,
        (peferDark:any) => {
            setIsDark(peferDark);
        }
    )
    const storageKey = 'theme';
    const getStoredTheme = () => {
        try {
            const storedValue = localStorage?.getItem(storageKey);
            if (storedValue === "true") return true;
            if (storedValue === "false") return false;
            return false; 
        } catch (error) {
            console.error("Error parsing theme from localStorage:", error);
            return false;
        }
    };

    const [isDark, setIsDark] = useState<boolean>(getStoredTheme);

    useEffect(() => {
        document?.firstElementChild?.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage?.setItem(storageKey, isDark.toString()); // حفظ القيمة كنص واضح
    }, [isDark]);

    return (
        <label className='theme__toggle'>
            <input 
                type="checkbox" 
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)} 
            />
            <div className="icon__container">
                <MdWbSunny className='sun' />
                <CgDarkMode className='moon' />
            </div>
        </label>
    );
};

export default ThemeToggle;
