export const Footer = () => {
    return <footer className="z-100 h-16 md:h-20 lg:px-[450px] px-8 flex gap-4 justify-evenly items-center bg-ksPink">
    <p className="md:text-lg italic whitespace-nowrap">&copy; 2024</p>
    <br className="md:hidden"/>
    <p className="md:text-lg italic"><a href="impressum" className="text-ksBlack visited:text-ksBlack hover:text-ksBlack hover:underline active:text-ksBlack active:underline">Impressum</a></p>
    <p className="md:text-lg italic"><a href="datenschutz" className="text-ksBlack visited:text-ksBlack hover:text-ksBlack hover:underline active:text-ksBlack active:underline">Datenschutz</a></p>
</footer>
}