"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button as AuthButton } from "../auth/Button";
import { SessionProvider } from 'next-auth/react';

type Props = {}

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className='border-b bg-black flex justify-between font-mono'>
        <Link href="/" className="text-4xl px-4 py-2">
          <Image src="/images/oaa-logo.png" width={150} height={150} alt="open access azania logo"/>
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  )
}

export default Header