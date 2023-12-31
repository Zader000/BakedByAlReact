import React, {useState} from "react";
import {Navbar, NavItem} from "../components/Navbar";
import {HomePage} from "./HomePage";
import {GalleryPage} from "./GalleryPage";
import {OrderPage} from "./OrderPage";
import {ContactPage} from "./ContactPage";

interface MainPageProps {
    children?: React.ReactNode;
}

export function MainPage({children}: MainPageProps) {
    const [page, setPage] = useState(0);
    return (
        <div className="">
            <Navbar>
                <NavItem onClick={() => setPage(0)} title="Home" isActive={(page === 0)}/>
                <NavItem onClick={() => setPage(1)} title="Gallery" isActive={(page === 1)}/>
                <NavItem onClick={() => setPage(2)} title="Contact" isActive={(page === 2)}/>
                <NavItem onClick={() => setPage(3)} title="Order" isActive={(page === 3)}/>
            </Navbar>
            <div className='text-center p-4'>
                {page === 0 && (
                    <HomePage/>
                )}
                {page === 1 && (
                    <GalleryPage/>
                )}
                {page === 2 &&
                    <ContactPage/>
                }
                {page === 3 &&
                    <OrderPage/>
                }
            </div>
        </div>
    )
}