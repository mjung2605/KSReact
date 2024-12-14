import { Heading } from "@/components"

export const Impressum = () => {
    return <div className="datasec impressum flex gap-5 flex-col items-center text-center pb-16 h-screen bg-ksPink">
        <Heading title={"Impressum"} isTextWhite={false} isPageTitle={false} />


    <h2><b>Angaben gem&auml;&szlig; § 5 TMG</b></h2>
    <p>Katharina Strikkeling<br />
    Carl-von-Ossietzky Stra&szlig;e 15<br />
    59302 Oelde</p>
    
    
    
    <h2><b>Kontakt</b></h2>
    <p>Telefon: +49 15751158159<br />
    E-Mail: info@kathistrikkeling.com</p>
    
    <h2><b>Gestaltung und Umsetzung der Website</b></h2>
    <p><a href="https://github.com/mjung2605">Meike Jungilligens</a></p>
    
    <h2><b>Redaktionell verantwortlich</b></h2>
    <p>Katharina Strikkeling</p>

    
    
    <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p></div>
}