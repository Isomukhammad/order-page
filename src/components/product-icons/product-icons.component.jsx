import Image from 'next/image';

import TradeIcon from '../../design/icons/Акция-trade in.svg';
import BundleIcon from '../../design/icons/Акция-bundle.svg';
import SaleIcon from '../../design/icons/Акция-скидка.png'
import IphoneSaleIcon from '../../design/icons/Акция-IMEI.svg'

import styles from './product-icons.module.scss'

const ProductIcons = ({trade, headphones, sale, name}) => (
    <div className = {styles.container}>
        { trade === 1 ? <TradeIcon/> : null } 
        { headphones === 1 ? <BundleIcon/> : null }
        { sale === 1? 
            <Image src = {SaleIcon} alt = 'Скидка' width={36} height={28} blurDataURL/> 
        : null}
        {
            name?.includes('iPhone') ? <IphoneSaleIcon/> : null 
        }
    </div>
)

export default ProductIcons;