'use client'
import React, { useEffect, useState } from 'react'
import { ToolTip } from './_components/tooltip'
import { DotBackground } from '@/components/dot-background'
import { SparklesHeading } from './_components/sparkles-heading'
const Layout = () => {
    const [rendered, setRendered] = useState(false)
    useEffect(() => {
        setRendered(true)
    }, [])

    return (
        <>
            {rendered ? (
                <div>
                    <DotBackground >
                        <SparklesHeading />
                        {/* <div className=" rounded-md  flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"> */}
                        <div className='absolute bottom-[130px] w-full'>

                            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">

                                <p className="leading-8  mt-4 font-bold text-[16px] text-neutral-300  text-center mx-auto">
                                    Our vision is to create a dynamic platform where users can seamlessly connect for work opportunities. Employers can post tasks and receive applications from potential workers, while users can also apply for jobs posted by others. Each user will build their profile based on ratings provided by employers and the number of jobs completed, helping future employers evaluate and prefer them for projects. The platform facilitates direct communication, allowing employers to message workers to discuss requirements in detail. Additionally, there will be an events page featuring hackathons and other tech-related events, and users will have the ability to post tech news, making it a hub for collaboration and information exchange.

                                </p>
                            </div>
                            {/* </div> */}

                            <ToolTip />
                        </div>

                    </DotBackground>
                </div>) : null
            }

        </>
    )
}

export default Layout
