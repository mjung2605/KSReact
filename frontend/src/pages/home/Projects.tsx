import { Audios, Heading, AudioCarousel, YoutubeEmbed } from "../../components"
 
export const Projects = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex flex-col bg-cover bg-ksPink h-screen">
        <Heading title={"Hörproben"} isTextWhite={false} />
        <AudioCarousel />
        <YoutubeEmbed />
    </section>
}