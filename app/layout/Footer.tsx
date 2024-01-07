import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black text-[#E87A21] font-mono py-6 px-4'><div className='flex container justify-between'>
      <div className='flex flex-row items-center'>
        <div>
          <div className='text-2xl'>OpenAccessAzania_</div>
          <div className='text-sm'>Built by Yousha Shoaib</div>
        </div>
      </div>
      <div className='flex mt-3'>
        <a href='https://github.com/yousha-shoaib' target="_blank" className='mr-3'>
          <Image src="/images/github.png" alt="github" width={32} height={32} />
        </a>
        <a href='https://twitter.com' target="_blank" className="mr-3">
          <Image src="/images/twitter.png" alt="twitter" width={32} height={32} />
        </a>
        <a href='https://yousha-shoaib.github.io' target="_blank">
          <Image src="/images/profile.png" alt="portfolio" width={32} height={32} />
        </a>
      </div>
    </div></div>
  )
}

export default Footer