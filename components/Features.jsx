import styles from "../styles/Features.module.css"
import Image from "next/image"
import { useState } from "react"

const Features = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const images = ["/img/featured.png", "/img/featured2.png", "/img/featured3.png"]

    const handleArrow = (direction) => {
        if(direction === "l") {
            setSlideNumber(slideNumber !== 0 ? slideNumber-1 : 2)
        }
        if(direction === "r") {
            setSlideNumber(slideNumber !== 2 ? slideNumber+1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="arrow-left" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*slideNumber}vw)`}}>
                {images.map((img, index) => (
                    <div key={index} className={styles.imgContainer}>
                        <Image src={img} layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="arrow-left" layout="fill" objectFit="contain" />
            </div>
        </div>
    )
}

export default Features