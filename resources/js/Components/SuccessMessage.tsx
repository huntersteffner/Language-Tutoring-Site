export default function SuccessMessage({message}: {message?: string}) {
    return (
        <div className="p-2 text-md bg-green-600 text-white">
            <p>{message}</p>
        </div>
    )
}