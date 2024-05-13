import { Heading } from "@/components"

export const ErrorPage = () => {

    return <div className=" flex flex-col items-center  m-0 bg-ksPink h-screen w-screen">
        <Heading title={"Ups!"} isTextWhite={false} isPageTitle={false} />
        <p>Da ist wohl leider etwas schiefgelaufen.</p>
        <p>Lade die Seite neu oder versuche es später erneut.</p>
    
    </div>
}