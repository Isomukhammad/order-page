import Image from 'next/image';
import img from '../../design/photos/image 21.png'

import TradeIcon from '../../design/icons/Акция-trade in.svg';
import BundleIcon from '../../design/icons/Акция-bundle.svg';
import SaleIcon from '../../design/icons/Акция-скидка.png'

import styles from './product-tab.module.scss';

const ProductTab = (props) => {
    const {category, name, photo, price, margin} = props.product;
    const {trade, headphones, sale} = props.product.additional[0];

    return(
        <div className = {styles.container}>
            <div className = {styles.img}>
                <Image 
                    src = {photo}
                    width={64}
                    height={136} 
                    alt = {name}
                />

                <div className = {styles.additional}>
                    { trade === 1 ? <TradeIcon/> : null } 
                    { headphones === 1 ? <BundleIcon/> : null }
                    { trade === 0? 
                        <Image src = {SaleIcon} alt = 'Скидка' width={36} height={28} blurDataURL/> 
                    : null}
                </div>
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