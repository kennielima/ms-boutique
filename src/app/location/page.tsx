import React from 'react'

function page() {
    return (
        <div className='mx-8 my-20'>
            <h1 className='mx-32 text-4xl mb-10'>Store Locations</h1>
            <div className='grid lg:flex gap-12 justify-center font-mono'>
                <div className='grid'>
                    <div className='bg-purple-200 h-16 flex justify-center items-center mb-10 text-xl'>Riverdale</div>
                    <div className='grid gap-4 text-lg text-slate-400'>
                        <p>816 Cabela Dr</p>
                        <p>Augusta, GA 30909</p>
                        <p>Store Contact #: 706-496-7961</p>
                        <p className='mt-4'>Store Hours:</p>
                        <p>Mon - Sat: 10:00am – 8:00pm</p>
                        <p>Sunday: 12:00pm – 6:00pm</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='bg-purple-200 h-16 flex justify-center items-center mb-10 text-xl'>Mullins</div>
                    <div className='grid gap-4 text-lg text-slate-400'>
                        <p>4219 Washington Road</p>
                        <p>Evans, GA 30809</p>
                        <p>Store Contact #: 706-869-8588</p>
                        <p className='mt-4'>Store Hours:</p>
                        <p>Mon - Sat: 10:00am – 8:00pm</p>
                        <p>Sunday: 12:00pm – 6:00pm</p>
                    </div>
                </div>
                <div className='grid'>
                    <div className='bg-purple-200 h-16 flex justify-center items-center mb-10 text-xl'>Grovetown</div>
                    <div className='grid gap-4 text-lg text-slate-400'>
                        <p>945 Branch Court</p>
                        <p>Grovetown, GA 30813</p>
                        <p>Store Contact #: 706-305-9330</p>
                        <p className='mt-4'>Store Hours:</p>
                        <p>Mon - Sat: 10:00am – 8:00pm</p>
                        <p>Sunday: 12:00pm – 6:00pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page