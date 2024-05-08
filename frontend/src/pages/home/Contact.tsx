import { BlurryBackground, ContactForm } from "../../components"

export const Contact = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-x-hidden flex bg-contact-image bg-cover">
        <BlurryBackground title="Kontakt" content={<ContactForm />}/>
    </section>
}