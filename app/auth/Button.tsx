"use client";
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

type Props = {}

export const Button = (props: Props) => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <div className='flex items-stretch'>
        <Link href="/blog/new" className='mr-6 text-white hover:underline self-center'>Create Post</Link>
        <button className="bg-[#E87A21] p-4 cursor-pointer" onClick={(e) => {
          e.preventDefault()
          signOut()
        }}>Sign Out</button>
      </div>
    )
  }
  return (
    <div onClick={() => signIn()} className="text-white bg-[#E87A21] px-4 py-6 cursor-pointer">Sign In</div>
  )
}