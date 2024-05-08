import { Audios, Heading } from "../../components"

export const Projects = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex flex-col bg-cover bg-ksPink">
        <Heading title={"Hörproben"} isTextWhite={false} />
        <Audios />
    </section>
}