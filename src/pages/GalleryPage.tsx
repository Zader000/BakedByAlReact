import {useState} from "react";


export function GalleryPage() {
    const [fullSize, setFullSize] = useState('17C07E28-4F1E-4469-8033-FE36E0EC73C6.JPG');
    const [showFullSize, setShowFullSize] = useState(false);
    return (
        <>
            <p className='text-5xl font-normal'>Gallery</p>
            <br/>
            {showFullSize && (
                <div className='flex flex-col w-full h-full items-center justify-center'>
                    <img src={`https://zbiggs.com/images/BakedByAl/${fullSize}`} className='full-gallery-image' alt='cake'/>
                    <br/>
                    <button onClick={() => setShowFullSize(false)} className='bg-confetti-blue rounded-full py-2 px-4 text-white text-xl'>Close</button>
                </div>
            )}
            {!showFullSize && (
                <div>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className='flex flex-row gap-5'>
                            <img src='https://zbiggs.com/images/BakedByAl/17C07E28-4F1E-4469-8033-FE36E0EC73C6.JPG' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('17C07E28-4F1E-4469-8033-FE36E0EC73C6.JPG');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/9A9B36ED-8211-4387-8217-A3E902DEE441.JPG' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('9A9B36ED-8211-4387-8217-A3E902DEE441.JPG');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/ACF316E9-03F5-4CEA-B052-B2502CB37E3F.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('ACF316E9-03F5-4CEA-B052-B2502CB37E3F.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/C1D68069-0A7C-4FCE-81DF-34C36D7188C6.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('C1D68069-0A7C-4FCE-81DF-34C36D7188C6.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/CB047CA9-1B36-4FB5-846D-9AD2EB555462.JPG' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('CB047CA9-1B36-4FB5-846D-9AD2EB555462.JPG');setShowFullSize(true);}}/>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <img src='https://zbiggs.com/images/BakedByAl/FB5D326D-E45B-4903-83AE-29ACF06448C1.JPG' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('FB5D326D-E45B-4903-83AE-29ACF06448C1.JPG');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_0944.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_0944.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_1763.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_1763.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_1976.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_1976.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_2203.JPG' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_2203.JPG');setShowFullSize(true);}}/>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_3997.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_3997.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_4341.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_4341.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_4421.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_4421.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_4434.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_4434.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_4630.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_4630.jpg');setShowFullSize(true);}}/>
                        </div>
                        <div className='flex flex-row gap-5'>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_2715.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_2715.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_8465.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_8465.jpg');setShowFullSize(true);}}/>
                            <img src='https://zbiggs.com/images/BakedByAl/IMG_8520.jpg' alt='cake' className='gallery-image'
                                 onClick={()=>{setFullSize('IMG_8520.jpg');setShowFullSize(true);}}/>
                        </div>
                    </div>
                </div>
                )}
        </>
    )
}
