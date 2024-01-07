import React from 'react'
import Image from "next/image";
import Link from 'next/link';

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className="border-b font-mono">
      <section className='grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8 text-gray-100'>
        <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl pt-3'>Viva Open Access, Viva!</h1>
          {/*<h2 className="pb-4 pt-2">Information is power. But like all power, there are those who want to keep it for themselves. -Aaron Swartz</h2>*/}
          <h2 className="pb-4 pt-4 mb-5">Bits are not a bug. We should create communications technologies that allow people to send whatever they like to each other. And when people put their thumbs on the scale and try to say what can and cant be sent, we should fight back - both politically through protest and technologically through software. -Aaron Swartz</h2>
          <Link href="/blog/all" className='text-white w-fit bg-[#E87A21] px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 border-white rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]'>Browse Articles</Link>
        </div>
        <div className='col-span-5 place-self-center'>
          <Image src="/images/raised-fist-cursors.png" width={500} height={500} alt="Rising fist made made our of cursors" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection