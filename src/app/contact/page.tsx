import Image from 'next/image'
import React from 'react'
import contactimg from '@/images/contactimg.jpeg'
function page() {
  return (
    <div className='mx-36 my-16 md:flex grid gap-12'>
      <Image src={contactimg} alt='' height={500} width={500} />
      <div>
        <form className='grid gap-6'>
          <label className='text-4xl'>Get in Touch</label>

          <div className='grid gap-2 text-slate-500 font-light'>
          <label className=''>First name *</label>
            <input
              type='name'
              className='border-[0.5px] border-slate-600 rounded-md p-2 w-72'
            />
          </div>
          <div className='grid gap-2 text-slate-500 font-light'>
          <label className=''>Last name *</label>
            <input
              type='name'
              className='border-[0.5px] border-slate-600 rounded-md p-2 w-72'
            />
          </div>
          <div className='grid gap-2 text-slate-500 font-light'>
          <label className=''>Phone *</label>
            <input
              name='number'
              className='border-[0.5px] border-slate-600 rounded-md p-2 w-72'
            />
          </div>
          <div className='grid gap-2 text-slate-500 font-light'>
          <label className=''>Email address *</label>
            <input
              type='email'
              className='border-[0.5px] border-slate-600 rounded-md p-2 w-72'
            />
          </div>
          <div className='grid gap-2 text-slate-500 font-light'>
          <label className=''>Message</label>
            <input
              type='textarea'
              placeholder='your message'
              className='border-[0.5px] border-slate-600 rounded-md pl-4 pb-40 w-[28rem] h-60'
            />
          </div>
          <button
              type='submit'
          className='rounded-full p-4 bg-slate-800 text-white hover:bg-slate-100 hover:text-slate-800 hover:border-[0.5px] hover:border-slate-500 transition-colors'
          >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page