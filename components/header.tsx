"use client";

import Image from "next/image";
import React, { useRef } from "react";
import useDetectScroll from "@smakss/react-scroll-direction";
import {
  LoginLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { LogInIcon } from "lucide-react";

import styles from "@/components/header.module.css";

import logo from "@/public/logo.svg";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { UserNavDropdown } from "./user-nav-dropdown";

export const Header = () => {
  const { scrollPosition } = useDetectScroll();
  const {
    isLoading: isLoadingAuth,
    isAuthenticated,
    user,
  } = useKindeBrowserClient();

  const parentHeaderRef = useRef<HTMLDivElement>(null);
  const height = parentHeaderRef.current?.offsetHeight;
  const isSticky = parentHeaderRef && (height || 0) / 2 < scrollPosition.top;

  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <div
      ref={parentHeaderRef}
      className={cn("w-full top-0", isSticky && styles.stickyNav)}
    >
      <div
        className={cn(
          "bg-white flex items-center justify-between p-4 shadow-sm z-10"
        )}
      >
        <div className='flex items-center gap-10'>
          <Image src={logo} alt='Logo' width={180} height={80} />

          <ul className='md:flex flex-row gap-8 hidden'>
            {menu.map((item, index) => (
              <Link href={item.path} key={index}>
                <li className='hover:text-blue-700 hover-effect'>
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {!isLoadingAuth && (
          <div className='flex items-center justify-end gap-2'>
            {isAuthenticated && (<UserNavDropdown user={user}/>)}
            <div>
              {!isAuthenticated && (
                <LoginLink postLoginRedirectURL='/'>
                  <Button variant={"outline"} className="bg-primary text-accent">
                    <LogInIcon className="size-4"/>
                    Sign In
                  </Button>
                </LoginLink>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
