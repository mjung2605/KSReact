export const Heading: React.FC<HeadingProps> = ( {title} ) => {
    return <>
        <hr />
        <h2>{title}</h2>
        <hr />
    </>
}