import { Link } from "react-router-dom";

export const Footer = () => {
    return <footer className="z-100 h-16 md:h-20 lg:px-[450px] px-8 flex gap-2 justify-evenly items-center bg-ksPink">
    <p className="md:text-lg whitespace-nowrap">&copy; 2024</p>
    <br className="md:hidden"/>
    <p className="md:text-lg"><Link to="impressum" className="text-ksBlack visited:text-ksBlack hover:text-ksBlack hover:underline active:text-ksBlack active:underline">Impressum</Link></p>
    <p className="md:text-lg"><Link to="datenschutz" className="text-ksBlack visited:text-ksBlack hover:text-ksBlack hover:underline active:text-ksBlack active:underline">Datenschutz</Link></p>
</footer>
}