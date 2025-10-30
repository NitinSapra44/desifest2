export default function ButtonRight({onClick, className}: {onClick: () => void, className: string}) {
    return (
        <button type="button" onClick={onClick} className={`flex-none w-8 h-8 ${className} flex items-center justify-center text-text`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    )
}