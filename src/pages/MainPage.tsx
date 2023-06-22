import React, {useState} from "react";
import {Navbar, NavItem} from "../components/Navbar";
import {HomePage} from "./HomePage";

interface MainPageProps {
    children?: React.ReactNode;
}

export function MainPage({children}: MainPageProps) {
    const [page, setPage] = useState(0);
    return (
        <div className="">
            <Navbar>
                <NavItem onClick={() => setPage(0)} title="Home" isActive={(page === 0)}/>
                <NavItem onClick={() => setPage(1)} title="About" isActive={(page === 1)}/>
                <NavItem onClick={() => setPage(2)} title="Contact" isActive={(page === 2)}/>
                <NavItem onClick={() => setPage(3)} title="Order" isActive={(page === 3)}/>
            </Navbar>
            <div className='text-center p-4'>
                {page === 0 && (
                    <HomePage>

                    </HomePage>
                )}
                {page === 1 && <h1 className="text-5xl text-blue-400 font-extrabold">About Page</h1>}
                {page === 2 && <h1 className="text-5xl text-blue-400 font-extrabold">Contact Page</h1>}
                {page === 3 && <h1 className="text-5xl text-blue-400 font-extrabold">Order Page</h1>}
            </div>
        </div>
    )
}