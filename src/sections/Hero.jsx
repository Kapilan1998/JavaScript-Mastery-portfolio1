import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnnimatedCounter from '../components/AnnimatedCounter'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 1.0,
        delay: 0.5
      }
    )
  })
  return (
    <section id="hero" className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='Background' />
      </div>

      <div className='hero-layout'>
        {/* Left side Hero content */}
        <header className='flex flex-col justify-center md:w-ful w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shapping <span className='slide'>
                <span className='wrapper'>
                  {words.map((word) => (
                    <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                      <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span></h1>
              <h1>into Real Projects</h1>
              <h1>that deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hi, I'm Kapilan, a developer with knowledge of Spring Boot and able to deploy to cloud also.
            </p>

            <Button className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my work" />
          </div>
        </header>

        {/* Right side Hero content (3D model) */}
        <figure>
          <div className='hero-3d-layout pb-16'>
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnnimatedCounter />
    </section>
  )
}

export default Hero
