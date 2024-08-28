import { PageProps } from "@/types";

interface Language {
    language: string
}

export default function LanguageBox({ language }: Language) {
    return (
        <>
            <div className="flex items-center justify-evenly">
                {/* Flags from https://nucleoapp.com/svg-flag-icons */}
                <img src={`img/flags/${language}.svg`} alt={`Flag for ${language}`} />
                <p>{language}</p>
            </div>
        </>
    )
}