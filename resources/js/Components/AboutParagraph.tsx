export default function AboutParagraph({paragraphBody}: {paragraphBody: string}) {
    return (
        <p className="pb-3 text-sm md:text-xl">
            {paragraphBody}
        </p>
    )
}