import Head from 'next/head';
import Image from 'next/image';

import CarouselButtons from '../../../components/carousel-buttons/carousel-buttons.component';
import Path from '../../../components/path/path.component';
import ProductIcons from '../../../components/product-icons/product-icons.component';
import Sidebar from '../../../components/sidebar/sidebar.component';

import BasketIcon from '../../../design/icons/icon-корзина.svg';

import styles from './product.module.scss'

export const getStaticPaths = async () => {
    const res = await fetch('https://my-json-server.typicode.com/Isomukhammad/order-page/product');
    const data = await res.json();

    const paths = data.map(object => {
        return {
            params: { product: object.id.toString() }
        }
        
    })

    return{
        paths,
        fallback: 'blocking', 
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://my-json-server.typicode.com/Isomukhammad/order-page/product?id=${params.product}`);
    const products = await res.json();
    
    return{
        props: {
            Assortment: products,
        }
    }
}

const Product = ({Assortment}) => {
    const {category, name, photo, brand, price, margin} = Assortment[0];
    const { trade, sale, headphones } = Assortment[0].additional[0];
    return(
        <>
        <Head>
            <title>Купить {Assortment[0].category} {Assortment[0].name}</title>
        </Head>
        <Sidebar>
            <Path 
                    main = {'Завки'} 
                    category = {'Оформить заказ'}
                    product = {`${Assortment[0].category} ${Assortment[0].name}`}
                />
            <div className = {styles.container}>
                <BasketIcon/>
                <h3>{category} {name}</h3>
                <div className = {styles.mainInfo}>
                    <div className = {styles.deviceImg}>
                        <div className = {styles.img}>
                            <Image
                                src = {photo}
                                layout = 'fill'
                                objectFit='contain'
                                alt = {name}
                            />
                        </div>

                        <ProductIcons trade = {trade} sale = {sale} headphones = {headphones} name = {name}/>

                        <CarouselButtons images = {Assortment[0]}/>
                    </div>

                    <div className = {styles.information}>

                    </div>
                </div>
            </div>
        </Sidebar>
        </>
    )
}

export default Product;