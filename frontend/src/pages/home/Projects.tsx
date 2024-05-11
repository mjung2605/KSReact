import { Audios, Heading } from "../../components"
import { YoutubeEmbed } from "../../components/YouTubeEmbed"
 
export const Projects = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex flex-col bg-cover bg-ksPink h-screen">
        <Heading title={"Hörproben"} isTextWhite={false} />
        <Audios />
        <YoutubeEmbed />
    </section>
}