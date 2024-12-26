export default function LanguageBox({ language }: {language: string}) {
    return (
        <>
            <div className="flex items-center justify-center">
                {/* Flags from https://nucleoapp.com/svg-flag-icons */}
                <div className="flex justify-center w-1/3">
                    <img src={`img/flags/${language}-Flag.svg`} alt={`Flag for ${language}`} />
                </div>
                <div className="w-1/3 text-left">
                    <p>{language}</p>
                </div>
            </div>
        </>
    )
}