import Head from 'next/head';
import Image from 'next/image';

import CarouselButtons from '../../../components/carousel-buttons/carousel-buttons.component';
import Path from '../../../components/path/path.component';
import ProductIcons from '../../../components/product-icons/product-icons.component';
import Sidebar from '../../../components/sidebar/sidebar.component';

import BasketIcon from '../../../design/icons/icon-корзина.svg';
import TradeIcon from '../../../design/icons/Акция-trade in.svg';
import BundleIcon from '../../../design/icons/Акция-bundle.svg';
import SaleIcon from '../../../design/icons/Акция-скидка.png';
import IphoneSaleIcon from '../../../design/icons/Акция-IMEI.svg';
import RightArrowIcon from '../../../design/icons/Arrow - Right.svg';


import styles from './product.module.scss'
import Sales from '../../../components/sales/sales.component';

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
    const {category, name, photo, brand, price, originprice, margin} = Assortment[0];
    const { trade, sale, headphones } = Assortment[0].additional[0];
    
    console.log(name);

    return(
        <>
        <Head>
            <title>Купить {Assortment[0].category} {Assortment[0].name}</title>
        </Head>
        <Sidebar>
            <Path 
                main = {'Заявки'} 
                category = {'Оформить заказ'}
                product = {`${Assortment[0].category} ${Assortment[0].name}`}
            />
            <div className = {styles.container}>
                <BasketIcon className = {styles.busket}/>
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

                        <div>
                            <ProductIcons trade = {trade} sale = {sale} headphones = {headphones} name = {name}/>
                        </div>

                        <CarouselButtons images = {Assortment[0]}/>
                    </div>

                    <div className = {styles.information}>
                        <div className = {styles.price}>
                            <h4>Цена телефона</h4>
                            <p>{originprice}</p>
                        </div>
                        <div className = {styles.overall}>
                            <div className = {styles.marginprice}>
                                <div className = {styles.price}>
                                    <h4>Общая цена (с наценкой)</h4>
                                    <p>{price}</p>
                                </div>
                                <div><span>{margin}</span> x3</div>
                            </div>

                            <div className = {styles.marginoptions}>
                                <p className = {styles.active}>3 мес</p>
                                <p>6 мес</p>
                                <p>12 мес</p>
                                <p>24 мес</p>
                            </div>

                            <div styles = {styles.margin}>Наценка: <span>5%</span></div>
                        </div>

                        <div className = {styles.charasteristics}>
                            <h4>Общие харакетристики</h4>
                            
                            <div>
                                <p>Тип: моноблок (классический)</p>
                                <p>Стандарт: 2G, 3G, 4G (LTE), 5G</p>
                                <p>Операционная система: 
                                    {
                                        brand == 'Apple' ? ' iOS14' : ' Android 11'
                                    }
                                </p>
                            </div>

                            <div>
                                <p>Показать все</p>
                                <RightArrowIcon/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = {styles.additionalInfo}>
                    <p>Акции</p>
                    <div styles = {styles.salesInfo}>
                        <Sales
                            title = {'Обменяй свой старый айфон и получи скидку на новый'}
                            info = {'- 400 000'}
                            status = {trade}
                        >
                            <TradeIcon/>
                        </Sales>
                        <p className = {styles.line}/>
                        <Sales 
                            title = {'Наушники в подарок'}
                            info = {'Apple EarPods'}
                            status = {headphones}
                        >
                            <BundleIcon/>
                        </Sales>
                        <p className = {styles.line}/>
                        <Sales
                            title = {'Скидка 20% на смартфоны'}
                            info = {'- 10 000 сум'}
                            status = {sale}
                        >
                            <Image src = {SaleIcon} alt = 'Скидка' width={36} height={28} blurDataURL/> 
                        </Sales>
                        <p className = {styles.line}/>
                        <Sales 
                            title = {'Скидка на айфоны'}
                            subtitle = {'IMEI 012345678901234'}
                            info = {'- 10 000'}
                            status = {name}
                        >
                            <IphoneSaleIcon/>
                        </Sales>
                    </div>
                </div>

                <div className = {styles.button}>Добавить в корзину</div>
            </div>
        </Sidebar>
        </>
    )
}

export default Product;