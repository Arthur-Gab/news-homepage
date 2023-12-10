'use client'
import Image from 'next/image'

const MainImage = () => {
    return (
        window.innerWidth > 1023 ? (<Image src={'/image-web-3-desktop.jpg'} alt='The Bright Future of Web 3.0' width={1460} height={600} />) : 
            (<Image src={'/image-web-3-mobile.jpg'} alt='The Bright Future of Web 3.0' width={686} height={600} />)
    )
}
export default MainImage;