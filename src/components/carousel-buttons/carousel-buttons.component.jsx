import { useEffect } from 'react';
import styles from './carousel-buttons.module.scss'

const CarouselButtons = ({images}) => {
    console.log(images);
    useEffect(() => {
        images.additional.map((img) => console.log(img))
    })
    return (
        <div className = {styles.container}>
        {
            Object.keys(images).map((img, index) => (
                <div key = {index} className = {`${styles.button} ${index === 0 ? styles.active : null}`}></div>
            ))
        }
        </div>
    )
}

export default CarouselButtons;