import { useEffect } from "react"

export default function SponsorModal({
    active, 
    heading, 
    subheading,
    price,
    onClose,
    children
}: {
    active: boolean, 
    heading: string, 
    subheading: string, 
    price: string,
    onClose: () => void,
    children: React.ReactNode}
) {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [active])
    
	return (
        <div className={`fixed h-screen w-full inset-0 z-[9999] ${active ? 'flex items-center justify-center' : 'hidden'}`}>
        <div className="h-[85vh] w-[95vw] lg:w-[70vw] bg-black px-6 py-8 lg:p-20 border-2 border-white relative modal-shadow overflow-hidden">

            {/* close button */}

            <button type="button" onClick={onClose} className="top-2 lg:top-6 absolute z-10 right-2 lg:right-6 uppercase text-2xl font-medium p-1 lg:p-2 bg-[#2f2f2f] text-white" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* download button */}
            <button className="lg:bottom-3 bottom-5 absolute right-4 uppercase text-2xl font-medium px-6 py-2 bg-[#FB0015] text-white" type="button">
                download pdf
            </button>

            <div className="flex gap-4 mb-5">
                <span className="w-2 lg:h-18 h-12 bg-[#FB0015]"></span>
                <div>
                    <h2 className="lg:text-[48px] text-2xl items-center uppercase text-white">
                        { heading }
                    </h2>
                    <p className="lg:text-2xl text-base text-text uppercase">{subheading}</p>
                </div>
            </div>

            <p className="font-extrabold font-heading text-center lg:text-4xl text-2xl audience_chipbg px-8 py-1.5 text-nowrap text-white mb-6">
                {price}
            </p>


            <div className="text-white h-[52vh] lg:h-[44vh] overflow-y-scroll scrollbar-hidden">
                {children}
                
            </div>
        </div>
    </div>
	)
}