export default function ButtonLeft({onClick, className}: {onClick: () => void, className: string}) {
    return (
        <button type="button" onClick={onClick} className={`flex-none w-8 h-8 flex items-center justify-center text-text ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
    )
}