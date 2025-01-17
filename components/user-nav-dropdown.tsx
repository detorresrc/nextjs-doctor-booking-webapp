'use client'

import React from 'react'
import Image from "next/image";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { CalendarSync, ChevronLeft, LogOut, UserRoundPenIcon } from 'lucide-react';
import { KindeState } from '@kinde-oss/kinde-auth-nextjs/types';

import styles from './user-nav-dropdown.module.css';

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { DottedSeparator } from './dotter-separator';
import { Button } from './ui/button';

interface Props {
  user: KindeState["user"]
}

export const UserNavDropdown = ({
  user
} : Props) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Image
            src={user?.picture || ""}
            width={50}
            height={50}
            alt={user?.family_name || "Profile Picture"}
            className='rounded-full hover-effect'
          />
        </PopoverTrigger>
        <PopoverContent className='w-80'>
          <div className={styles.usernavdropdown}>
            <Image
              src={user?.picture || ""}
              width={80}
              height={80}
              alt={user?.family_name || "Profile Picture"}
              className='rounded-full pb-1'
            />
            <div>
              <p>
                {user?.given_name} {user?.family_name}
              </p>
              <p className='text-sm text-neutral-500 p-0 m-0'>
                {user?.email}
              </p>
              <DottedSeparator className='py-4' />
              <ul>
                <li><UserRoundPenIcon className='size-5'/>Profile</li>
                <li><CalendarSync className='size-5'/> My Booking</li>
                <li>
                <LogOut className='size-5'/> <LogoutLink postLogoutRedirectURL="/">Logout</LogoutLink>
                </li>
              </ul>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
