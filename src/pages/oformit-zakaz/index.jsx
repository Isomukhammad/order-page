import Head from 'next/head';
import { useRouter } from 'next/router';
import Path from '../../components/path/path.component';
import ProductTab from '../../components/product-tab/product-tab.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import Sidebar from "../../components/sidebar/sidebar.component";

import { data } from '../../data/data';

import styles from './oformit-zakaz.module.scss';

export const getStaticProps = async () => {
    return{
        props: {
            Assortment: data
        }
    }
}

const OformitZakaz = ({Assortment}) => {
    const pathname = useRouter();

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
                <h4>Все товары ({Assortment.length})</h4>

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

export default OformitZakaz;