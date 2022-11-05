import Image from 'next/image';
import img from '../../design/photos/image 21.png'
import styles from './product-tab.module.scss';

const ProductTab = (props) => {
    const {category, name, photo, price, margin} = props.product;
    console.log(photo)
    return(
        <div className = {styles.container}>
            <div className = {styles.img}>
                <Image 
                    src = {img}
                    width={64}
                    height={136} 
                    alt = {name}
                />
            </div>

            <div className = {styles.description}>
                <div className = {styles.name}>{category} {name}</div>
                <div className = {styles.price}>{price} сум</div>
                <div className = {styles.margin}><span>от {margin} сум</span><span>x24</span></div>
            </div>
        </div>
    )
}

export default ProductTab;