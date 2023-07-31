import {BsEnvelopeAtFill, BsInstagram, BsPhoneFill} from "react-icons/bs";

export function ContactPage() {
    return (
        <div className='flex flex-col'>
            <div className=''>
                <h1 className="text-5xl font-normal">Contact</h1>
            </div>
            <div className="flex flex-row items-center justify-evenly mt-20">
                <div className="flex flex-col items-center w-96">
                    <div className='p-5 rounded-full bg-confetti-blue flex flex-row w-auto'>
                        <BsEnvelopeAtFill className='text-8xl'/>
                    </div>
                    <p className='text-2xl font-normal'>
                        info@bakedbyal.com
                    </p>
                </div>
                <div className="flex flex-col items-center w-96">
                    <div className='p-5 rounded-full bg-confetti-blue flex flex-row'>
                        <BsPhoneFill className='text-8xl'/>
                    </div>
                    <p className='text-2xl font-normal'>
                        (123) 456-7890
                    </p>
                </div>
                <div className="flex flex-col items-center w-96">
                    <div className='p-5 rounded-full bg-confetti-blue flex flex-row'>
                        <BsInstagram className='text-8xl'/>
                    </div>
                    <p className='text-2xl font-normal'>
                        Instagram: @bakedbyal
                    </p>
                </div>
            </div>
        </div>
    )
}