import { BlurryBackground, ContactForm } from "@/components"

export const Contact = () => {

    return <section style={{scrollSnapAlign: "start"}} className="overflow-hidden flex flex-col bg-contact-image bg-cover">
        <BlurryBackground title="Kontakt" content={<ContactForm />}/>
        
    </section>
}