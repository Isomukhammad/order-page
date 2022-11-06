import Head from 'next/head';
import Path from '../../../components/path/path.component';
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
    console.log(context);
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
            </div>
        </Sidebar>
        </>
    )
}

export default Product;