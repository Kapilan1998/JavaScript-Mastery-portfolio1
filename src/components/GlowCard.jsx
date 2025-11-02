import React from 'react'

const GlowCard = ({ card, childern }) => {
    return (
        <div className='card card-border timeline-card rounded-xl p-10'>
            <div className='glow' />
            <div className='flex items-center gap-1 mb-5'>
                {Array.from({ length: 5 }, (_, i) => (
                    <img src="/images/star.png" alt="star" key={i} className='size-5' />
                ))}
            </div>

            <div className='mb-5'>
                <p className='text-white-50 text-lg'>{card.review}</p>
            </div>
            {childern}
        </div>
    )
}

export default GlowCard
