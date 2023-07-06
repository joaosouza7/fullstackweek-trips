"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
    const { status, data } = useSession();
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const handleLoginClick = () => signIn();
    const handleLogoutClick = () => {
        setMenuIsOpen(false);
        signOut();
    };

    const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
    
    return (
        <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
            
            <Link href="/">
                <div className="relative h-[32px] w-[182px]">
                    <Image src="/logo.png" alt="Full Stack Week" fill />
                </div>
            </Link>

            {status === "unauthenticated" && (
                <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>
                    Login
                </button>
            )}

            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayLighter border border-solid p-1 px-3 rounded-full relative">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} className="cursor-pointer" />

                    <Image width={35} height={35} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md" />

                    {menuIsOpen && (
                        <div className="z-50 absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center">
                            <button className="text-primary text-sm font-semibold" onClick={handleLogoutClick}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            )}
            
        </div>
    );
};

export default Header;