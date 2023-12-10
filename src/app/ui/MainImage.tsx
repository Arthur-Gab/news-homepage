'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const MainImage = () => {
    const [width, setWidth] = useState(0)
    
    const handleBodyWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleBodyWidth);
        return () => {
            window.removeEventListener('resize', handleBodyWidth);
        }
    },[])

    
    return (
        width > 1023 ? (<Image src={'/image-web-3-desktop.jpg'} alt='The Bright Future of Web 3.0' width={1460} height={600} />) : 
            (<Image src={'/image-web-3-mobile.jpg'} alt='The Bright Future of Web 3.0' width={686} height={600} />)
    )
}
export default MainImage;