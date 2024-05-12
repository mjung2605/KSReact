import { Footer } from "."
import "@/index.css"

export const ContactForm = () => {

    return <div className="flex flex-col justify-between h-full w-full">
        <div className="pt-20 flex flex-col gap-6 items-center">
            <p>Sie sind an einer Zusammenarbeit interessiert?</p>
            <p>Dann melden Sie sich bei mir!</p>
            <p className="my-8">E-Mail: <a href="mailto:info@kathistrikkeling.com?subject=Kontaktanfrage%20via%20kathistrikkeling.com" className="underline">info@kathistrikkeling.com</a></p>
        </div>
        <Footer />
    </div>
}