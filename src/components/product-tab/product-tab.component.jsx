import Image from 'next/image';
import img from '../../design/photos/image 21.png'

import styles from './product-tab.module.scss';
import Link from 'next/link';
import ProductIcons from '../product-icons/product-icons.component';

const ProductTab = (props) => {
    const {id, category, name, photo, price, margin} = props.product;
    const {trade, headphones, sale} = props.product.additional[0];

    return(
        <Link href = {`/oformit-zakaz/product/${id}`} className = {styles.container}>
            <div className = {styles.img}>
                <div className = {styles.deviceImg}>
                    <Image 
                        src = {photo}
                        layout = 'fill'
                        objectFit='contain'
                        alt = {name}
                    />
                </div>

                <ProductIcons trade = {trade} sale = {sale} headphones = {headphones} name = {name}/>
            </div>

            <div className = {styles.description}>
                <div className = {styles.name}>{category} {name}</div>
                <div className = {styles.price}>{price} сум</div>
                <div className = {styles.margin}><span>от {margin} сум</span><span>x24</span></div>
            </div>
        </Link>
    )
}

export default ProductTab;