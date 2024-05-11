import { BlurryBackground, ContactForm } from "@/components"

export const Start = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex bg-start-image bg-cover">
        <BlurryBackground title="Kathi Strikkeling" isPageTitle={true} content={<></>}/>
    </section>
}