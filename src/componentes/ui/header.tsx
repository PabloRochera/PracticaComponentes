"use client";

import { Button } from "../ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Product",
            description: "Managing a small business today is already tough.",
            items: [
                { title: "Reports", href: "/reports" },
                { title: "Statistics", href: "/statistics" },
                { title: "Dashboards", href: "/dashboards" },
                { title: "Recordings", href: "/recordings" },
            ],
        },
        {
            title: "Company",
            description: "Managing a small business today is already tough.",
            items: [
                { title: "About us", href: "/about" },
                { title: "Fundraising", href: "/fundraising" },
                { title: "Investors", href: "/investors" },
                { title: "Contact us", href: "/contact" },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <header className="w-full z-50 fixed top-0 left-0 bg-background shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <p className="font-semibold">TWBlocks</p>

                <div className="hidden lg:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-6">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <NavigationMenuLink href={item.href}>
                                            <Button variant="primary">{item.title}</Button>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <div className="p-4 grid grid-cols-2 gap-4">
                                                    {item.items?.map((subItem) => (
                                                        <NavigationMenuLink
                                                            href={subItem.href}
                                                            key={subItem.title}
                                                            className="hover:bg-muted p-2 rounded"
                                                        >
                                                            <span>{subItem.title}</span>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="lg:hidden">
                    <Button variant="primary" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full w-full bg-background shadow-lg p-4">
                    {navigationItems.map((item) => (
                        <div key={item.title} className="py-2">
                            {item.href ? (
                                <Link href={item.href} className="block p-2">
                                    {item.title}
                                </Link>
                            ) : (
                                <p className="font-bold p-2">{item.title}</p>
                            )}
                            {item.items?.map((subItem) => (
                                <Link key={subItem.title} href={subItem.href} className="block pl-4 p-1">
                                    {subItem.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}

export { Header1 };
