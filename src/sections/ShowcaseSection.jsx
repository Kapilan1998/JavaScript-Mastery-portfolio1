import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100"
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5
            }
        )
    }, [])
    return (
        <section id="work" ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* left side */}
                    <div className='fist-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>On-Demands Made Simple with a Powerful,User friendly Appliaction</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React native,Expo & TailwindCSS for fast, user-friendly expereince
                            </p>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='project-list-wrapper overflow-hidden'>
                        {/* first project */}
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#e7bf8d]'>
                                <img src="/images/project2.png" alt="Library Management Platform" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        {/* second project */}
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#71abf7]'>
                                <img src="/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
