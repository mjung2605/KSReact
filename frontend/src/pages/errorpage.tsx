import { Heading } from "@/components"

export const ErrorPage = () => {

    return <div className="text-center m-0 bg-ksPink">
        <Heading title={"Fehler"} isTextWhite={false} isPageTitle={false} />
        <p>Da ist wohl leider etwas schiefgelaufen.</p>
        <p>Lade die Seite neu oder versuche es später erneut.</p>
    
    </div>
}