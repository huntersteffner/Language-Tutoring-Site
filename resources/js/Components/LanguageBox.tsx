export default function LanguageBox({ language }: {language: string}) {
    return (
        <>
            <div className="flex items-center justify-evenly">
                {/* Flags from https://nucleoapp.com/svg-flag-icons */}
                <img src={`img/flags/${language}-Flag.svg`} alt={`Flag for ${language}`} />
                <p>{language}</p>
            </div>
        </>
    )
}