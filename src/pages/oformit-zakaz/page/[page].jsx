import { useEffect } from "react";

import Head from "next/head";
import Router, { useRouter } from "next/router";

import Path from "../../../components/path/path.component";
import ProductTab from "../../../components/product-tab/product-tab.component";
import SearchBar from "../../../components/search-bar/search-bar.component";
import Sidebar from "../../../components/sidebar/sidebar.component";

import styles from './page.module.scss'

export const getStaticPaths = async () => {
    const res = await fetch('https://my-json-server.typicode.com/Isomukhammad/order-page/product');
    const data = await res.json();

    const paths = data.map(object => {
        return {
            params: { page: object.id.toString() }
        }
        
    })

    return{
        paths,
        fallback: true, 
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://my-json-server.typicode.com/Isomukhammad/order-page/product?_page=${params.page}&_limit=10`);
    const products = await res.json();
    
    return{
        props: {
            Assortment: products,
        }
    }
}

const Product = ({ Assortment }) => {
    const router = useRouter();
    useEffect(() => {
        if(Assortment.length === 0){
            router.push(`/oformit-zakaz/page/1`)
        }
    })

    return(
        <>
            <Head>
                <title>Оформить заказ</title>
            </Head>
            <Sidebar>
                <div className = {styles.container}>
                    <Path main = {'Завки'} category = {'Оформить заказ'}/>
                    <h3>Оформить заказ</h3>
                    <SearchBar placeholder={'Поиск по названию товара'}/>
                    <h4>Все товары ({Assortment?.length})</h4>
    
                    <div className = {styles.devices}> 
                    {
                        Assortment?.map(device => (
                            <ProductTab key = {device.id} product = {device}/>
                        ))
                    }
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default Product;