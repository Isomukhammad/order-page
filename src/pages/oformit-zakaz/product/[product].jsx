import Head from 'next/head';
import Path from '../../../components/path/path.component';
import ProductIcons from '../../../components/product-icons/product-icons.component';
import Sidebar from '../../../components/sidebar/sidebar.component';
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
    const {category, name, photo, price, margin} = Assortment[0];
    const { trade, sale, headphones } = Assortment[0].additional[0];
    return(
        <>
        <Head>
            <title>Купить {Assortment[0].category} {Assortment[0].name}</title>
        </Head>
        <Sidebar>
            <div className = {styles.container}>
                <Path 
                    main = {'Завки'} 
                    category = {'Оформить заказ'}
                    product = {`${Assortment[0].category} ${Assortment[0].name}`}
                />

                <ProductIcons trade = {trade} sale = {sale} headphones = {headphones}/>

                <div className = {styles.box}>
                    <h2>{name}</h2>
                    <div>
                        <div className = {styles.img}>

                        </div>

                        <div className = {styles.information}>

                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
        </>
    )
}

export default Product;