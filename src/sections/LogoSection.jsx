import { logoIconsList } from "../constants"

// small reusable component that displays one logo
const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className='md:my-20 my-10 relative'>

            {/* fading gradient overlays on the left and right edges to make the scrolling logos blend smoothly */}
            <div className='gradient-edge' />
            <div className='gradient-edge' />

            <div className='marquee h-52'>
                <div className='marquee-box md:gaap-12 gap-5'>

                    {/* 
                    The duplicate mapping creates a second copy of the same logos right after the first.
This ensures a seamless infinite marquee effect- when the first list scrolls out, the second one follows immediately without a gap.

It is like continuous elements in a loop without any visible breaks(gap) between the end of one and the start of the next.
 */}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}

                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default LogoSection
