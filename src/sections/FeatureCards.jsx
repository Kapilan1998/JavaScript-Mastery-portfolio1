import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
    return (
        <div className='w-full padding-x-lg'>
            <div className='mx-auto grid-3-cols'>
                {abilities.map(({ imgPath, title, desc }) => (
                    // <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    //     <div className='size-15 flex items-center justify-center rounded-full'>
                    //         <img src={imgPath} alt={title} />
                    //     </div>
                    //     <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                    //     <p className='text-white-50 text-lg'>{desc}</p>
                    // </div>

                    <div
                        key={title}
                        className=" card-border rounded-xl p-8 flex flex-col gap-4 mb-8
                                    bg-gradient-to-b from-slate-900 to-slate-800
                                    hover:from-indigo-600 hover:to-purple-600
                                    transform hover:scale-105
                                    transition-all duration-500 ease-out">
                        <div className="size-15 flex items-center justify-center rounded-full bg-indigo-600/20">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white/70 text-lg">{desc}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default FeatureCards
