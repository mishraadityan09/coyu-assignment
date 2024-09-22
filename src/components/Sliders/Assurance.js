import React, { useState, useEffect, useRef } from 'react';
import image from "/public/assuance/image 4151.png"
import Image from 'next/image';

const Assurance = () => {
    const [current, setCurrent] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const trackRef = useRef(null);

    const cards = [
        { icon: "", title: 'Photography', description: 'Capture beautiful moments' },
        { icon: "", title: 'Health', description: 'Stay fit and healthy' },
        { icon: "", title: 'Favorites', description: 'Your top picks' },
        { icon: "", title: 'Relaxation', description: 'Take a break and unwind' },
    ];

    const images = [
        '/oval.png',
        '/oval.png',
        '/oval.png',
        '/oval.png'
    ];

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const jumpImage = (jumpIndex) => {
        setCurrent(jumpIndex);
        setDragOffset(0);  // Reset drag offset when jumping to a specific image
    };

    const handleDragStart = (e) => {
        setStartX(e.clientX || e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX || e.touches[0].clientX;
        const diff = startX - currentX;
        setDragOffset(diff);
    };

    const handleDragEnd = () => {
        if (Math.abs(dragOffset) > 20) {
            if (dragOffset > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
        setIsDragging(false);
        setDragOffset(0);
    };

    useEffect(() => {
        const handleMove = (e) => isDragging && handleDragMove(e);
        const handleEnd = () => isDragging && handleDragEnd();

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, dragOffset]);

    const getImageStyle = (index) => {
        const position = (index - current + images.length) % images.length;
        const baseTransform = `translateX(${position * 120 - (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100}%)`;
        return {
            backgroundImage: `url(${images[index]})`,
            transform: baseTransform,
            transition: isDragging ? 'none' : 'transform 0.6s ease-out'
        };
    };

    const getCardStyle = (index) => {
        const position = (index - current + cards.length) % cards.length;
        const baseTransform = `translateX(${position * 120 - (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100}%)`;
        return {
            transform: baseTransform,
            transition: isDragging ? 'none' : 'transform 0.6s ease-out'
        };
    };


    return (
       <>
        <div className='flex flex-col my-4'>
                <p className='text-sm font-bold'>Coyu assurance</p>
                <div className='text-xs'>
                    <div className='text-xs textgrey' >Premium quality  |  Perfect fit  |  24x7 Support</div>

                </div>
            </div>
        <div className="assurance-gallery-container  mb-16">
            <div
                className="assurance-gallarytrack"
                ref={trackRef}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="absolute top-0 left-0 w-full h-full bg-slate-200 rounded-md   flex items-center justify-around  "
                        style={getCardStyle(index)}
                    >
                        <div className=' p-3 bg-white  rounded-full '>
                            <Image src={image} />
                        </div>
                        <div className='w-[70%]'>
                            <div className='text-[20px] font-serif font-semibold textblack'>
                            Premium quality
                            </div>
                            <div className='text-[11px] textgrey font-normal'>
                            Each product is tested in store for premium fabric and exceptional craftsmanship.
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="gallery-footer">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === current ? 'active' : ''}`}
                        onClick={() => jumpImage(index)}
                    ></div>
                ))}
            </div>
        </div>
       </>
    );
};

export default Assurance;