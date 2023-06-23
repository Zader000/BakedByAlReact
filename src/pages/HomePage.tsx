
export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex flex-row gap-5'>
                <img src='https://zbiggs.com/images/BakedByAl/logo.jpeg' alt='logo' className='shadow-md rounded-full w-1/3 h-1/3'/>
                <div className='flex flex-col justify-center'>
                    <p className='text-5xl font-normal'>Welcome to Baked By Al!</p>
                    <br/>
                    <p className='text-2xl font-normal'>We are a small business that specializes in custom cakes and cupcakes.</p>
                </div>
            </div>
        </div>
    )
}