import { useState, useEffect } from "react"
import { AudioList, Heading, AudioCarousel, YoutubeEmbed } from "@/components"
 
export const Projects = () => {

    // Responsiveness for smaller screens: switches from array of audio components to carousel component
    // useState with boolean args; whenever screen gets resized, it re-checks the condition
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })


    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex flex-col bg-cover bg-ksPink h-screen">
        <Heading title={"Hörproben"} isTextWhite={false} isPageTitle={false} />
        
        {isMobile ? <AudioCarousel /> : <AudioList />}
        <YoutubeEmbed />
    </section>
}