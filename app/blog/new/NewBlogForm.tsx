"use client";
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { createPost } from "@/app/actions/publishPost";
import Link from 'next/link';
import type { Category } from '@prisma/client';
import CategoryDropdown from './CategoryDropdown';
import { Prisma } from '@prisma/client';
import "@uploadthing/react/styles.css";
import { UploadButton } from "../../utils/uploadthing";

type Props = {
  blogCategories: Category[]
}

const NewBlogForm = (props: Props) => {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [postID, setPostID] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session && status !== "loading") return (
    <div>You must be signed in to post</div>
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = session?.user as any;
    const userId = user?.id;

    if (!userId) return;
    try {
      let newPost: Prisma.PostUncheckedCreateInput = { title, content, authorId: userId, imgURL: thumbnail }

      if (categoryId) {
        newPost.categories = {
          connect: [{ id: categoryId }]
        }
      }
      const post = await createPost(newPost);
      setPostID(post.id);
      setSubmitted(true);
    } catch (error) {
      console.log(error)
    }
  }

  if (submitted) return (
    <div className='py-2 container flex flex-col mt-12 font-mono text-white pb-72'>
      <div className='flex flex-col flex-1 items-stretch justify-center h-full text-left p-8'><h1 className='text-4xl'>Your post has been published:</h1>
        <Link href={`/blog/${postID}`} className='text-indigo-500 text-xl mt-4'>Click here to view</Link>
      </div>
    </div>
  )

  return (
    <div className='min-h-[calc(100vh-130px)] py-2 px-3 container flex flex-col mt-12 font-mono'>
      <form className='flex flex-col flex-1 items-stretch justify-center h-full text-left' onSubmit={handleSubmit}>
      <input type="text" className='text-5xl focus-visible:outline-none bg-gray-700 p-2 rounded-md mb-2 text-gray-300' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
      <textarea placeholder="this is a post about..." name="content" className='flex-1 focus-visible:outline-none text-xl mt-2 bg-gray-700 p-2 rounded-md text-gray-300 mb-5' value={content} onChange={(e) => setContent(e.target.value)} />
      <div className="self-start mt-2">
        {
          thumbnail && <img src={thumbnail} alt="Thumbnail" className='w-20 h-20 object-cover rounded-full' />
        }
        <label className='text-slate-400 mb-5 mt-5'>{thumbnail ? "Change Image" : "Add an Optional Thumbnail Image"}</label>
        <UploadButton
          className='items-center ut-button:p-2 ut-button:w-[360px] mt-2 ut-button:bg-[#E87A21] ut-button:rounded ut-button:shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)] ut-button:ut-readying:bg-orange-500'
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            if (res) {
              setThumbnail(res[0].url);
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        <CategoryDropdown list={props.blogCategories} selected={categoryId} setSelected={(selected: number) => setCategoryId(selected)} />
      </div>
      <button type="submit" className='w-fit-content text-white bg-[#E87A21] px-4 py-8 sm:px-6 sm:py-4 mt-6 border-2 mb-10 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(255,255,255,1)]'>Create</button>
    </form></div>
  )
}

export default NewBlogForm