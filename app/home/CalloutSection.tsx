import React from 'react'
import Image from "next/image";
import NewsletterSubscribe from './NewsletterSubscribe';

const CalloutSection = () => {
  return (
    <div className='font-mono border-t-2 border-b-2 bg-[#E87A21] mt-12 p-8'><div className='grid grid-cols-12 container'>
      <div className='col-span-8 flex flex-col place-self-center'>
        <h2 className='semi-bold text-4xl mb-2'>Join the Open Access Azania Newsletter</h2>
        <p className='max-w-2xl mb-4'>Stay up to date with the latest developments and actions in the movement. The newsletter is a short summary of the most recent articles and notices uploaded here. Whether your busy on the ground or data savy this newsletter is a perfect additon to your reading list.</p>
        <NewsletterSubscribe />
      </div>
      <div className='col-span-4 xs:ml-4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative self-center'>
        <Image src="/images/raised-fist-colab.png" alt="multiple people inside a maze centered by a raised fist" width={250} height={250} className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' />
      </div>
    </div></div>
  )
}

export default CalloutSection