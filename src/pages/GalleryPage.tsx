import {useState} from "react";
import {BsChevronLeft, BsChevronRight, BsX} from "react-icons/bs";

export function GalleryPage() {
    const [fullSize, setFullSize] = useState('');
    const [showFullSize, setShowFullSize] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const cakeImages: string[] = [
        'https://zbiggs.com/images/BakedByAl/17C07E28-4F1E-4469-8033-FE36E0EC73C6.JPG',
        'https://zbiggs.com/images/BakedByAl/9A9B36ED-8211-4387-8217-A3E902DEE441.JPG',
        'https://zbiggs.com/images/BakedByAl/ACF316E9-03F5-4CEA-B052-B2502CB37E3F.jpg',
        'https://zbiggs.com/images/BakedByAl/C1D68069-0A7C-4FCE-81DF-34C36D7188C6.jpg',
        'https://zbiggs.com/images/BakedByAl/CB047CA9-1B36-4FB5-846D-9AD2EB555462.JPG',
        'https://zbiggs.com/images/BakedByAl/FB5D326D-E45B-4903-83AE-29ACF06448C1.JPG',
        'https://zbiggs.com/images/BakedByAl/IMG_0944.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_1763.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_1976.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_2203.JPG',
        'https://zbiggs.com/images/BakedByAl/IMG_3997.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_4341.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_4421.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_4434.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_4630.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_2715.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_8465.jpg',
        'https://zbiggs.com/images/BakedByAl/IMG_8520.jpg',
    ]
    return (
        <>
            <p className='text-5xl font-normal'>Gallery</p>
            <br/>
            {showFullSize && (
                <div className='popup'>
                    <button onClick={() => setShowFullSize(false)} className='text-6xl absolute right-10 top-10'><BsX className='text-white'/></button>
                    <div className='popup-inner'>
                        <div className='flex flex-row gap-5'>
                            {selectedIndex > 0 && (
                                <button onClick={() => {
                                    if (selectedIndex > 0) {
                                        setSelectedIndex(selectedIndex - 1);
                                        setFullSize(cakeImages[selectedIndex - 1]);
                                    }
                                }} className='text-5xl'><BsChevronLeft className='text-white'/></button>
                            )}
                            <img src={`${fullSize}`} className='full-gallery-image' alt='cake'/>
                            {selectedIndex < cakeImages.length - 1 && (
                                <button onClick={() => {
                                    if (selectedIndex < cakeImages.length - 1) {
                                        setSelectedIndex(selectedIndex + 1);
                                        setFullSize(cakeImages[selectedIndex + 1]);
                                    }
                                }} className='text-5xl'><BsChevronRight className={'text-white'}/></button>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className='flex flex-row justify-center w-screen'>
                <div className='flex flex-row gap-5 flex-wrap justify-center w-3/4'>
                    {cakeImages.map((image, index) => (
                        <>
                            <img src={image} alt='cake' className='gallery-image' onClick={() => {
                                setFullSize(image);
                                setShowFullSize(true);
                                setSelectedIndex(index);
                            }}/>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
