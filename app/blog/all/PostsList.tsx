import React from 'react'
import { Prisma } from '@prisma/client'
import Link from 'next/link'

type Post = Prisma.PostGetPayload<{
  include: { categories: true }
}>

export type PostListProps = {
  posts: Post[]
}

export const PostsList = (props: PostListProps) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-4 px-3 font-mono'>
      {props.posts.map((post: Post) => (<div key={post.id} className='w-full sm:w-40 md:w-60 lg:w-80 h-full bg-white border-2 rounded-md shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)] bg-orange-400'>
        <Link href={`/blog/${post.id}`} className='block cursor-pointer'>
          <article className='w-full h-full'>
            <figure className='w-full h-30 md:h-40 lg:h-72 border-b-2 '>
              {
                post.imgURL ? <img src={post.imgURL} alt="thumbnail" className='w-full h-full object-cover' /> : <img src="/article-placeholder.png" alt="thumbnail" className='w-full h-full object-cover' />
              }
            </figure>
          </article>
          <div className='px-6 py-5 text-left h-full'>
            <p className='text-base mb-4'>{post.createdAt?.toLocaleString()}</p>
            <h1 className='text-xl mb-4'>{post.title}</h1>
            <p className='text-xs mb-4 line-clamp-4'>{post.content}</p>
            <p className='text-indigo-600'>Read More</p>
          </div>
        </Link>
      </div>
      ))
      }
    </div>
  )
}
