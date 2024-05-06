import { Heading, ContactForm } from "."

export const Background = () => {

    return <div className="bg-opacity-50 backdrop-filter backdrop-blur-10 w-screen h-screen flex flex-col items-center">
        <Heading title={"Kontakt"}/>
        <br />
        <br />
        <ContactForm />
    </div>

}