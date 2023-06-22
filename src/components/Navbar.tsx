import React from "react";

interface NavbarProps {
    children: React.ReactNode;
}

export function Navbar({children}: NavbarProps) {
    return (
        <div className="flex flex-row justify-between items-center bg-light-cream shadow-lg mt-2">
            <div>
                <p className='mx-3 font-normal text-2xl'>
                    Baked By Al
                </p>
            </div>
            <div className="flex flex-row mx-5">
                {children}
            </div>
        </div>
    );
}

interface NavItemProps {
    onClick: () => void;
    title: string;
    isActive: boolean;
}

export function NavItem({onClick, title, isActive}: NavItemProps) {
    return (
        <div>
            <button onClick={onClick} className={`text-lg font-normal py-2 px-4 rounded-t-xl ${(isActive ? 'active-nav' : '')}`}>
                {title}
            </button>
        </div>
    )
}