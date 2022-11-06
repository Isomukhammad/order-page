import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import GlavnayaLogo from '../../design/icons/icon-главная.svg';
import ZakaziLogo from '../../design/icons/icon-заказы.svg';
import TovariLogo from '../../design/icons/icon-товары.svg';
import OtziviLogo from '../../design/icons/icon-отзывы.svg'
import OformitLogo from '../../design/icons/icon-оформить заказ.svg';

import styles from './sidebar.module.scss';
import { useRouter } from 'next/router';

const Sidebar = ({children}) => {
    const {pathname} = useRouter();
    return(
        <div className = {styles.sidebar}> 
            <ul className = {styles.links}>
                <li className = {pathname === '/' ? `${styles.active}` : null}>
                    <Link href = '/'>
                        <GlavnayaLogo/>
                        Главная
                    </Link>
                </li>

                <li className = {pathname === '/zakazi' ? `${styles.active}` : null}>
                    <Link href = '/zakazi' className = {styles.disabled}>   
                        <ZakaziLogo/>
                        Заказы
                    </Link>
                </li>

                <li className = {pathname === '/tovari' ? `${styles.active}` : null}>
                    <Link href = '/tovari' className = {styles.disabled}>
                        <TovariLogo/>
                        Товары
                    </Link>
                    
                </li >

                <li className = {pathname === '/otzivi' ? `${styles.active}` : null}>
                    <Link href = '/otzivi' className = {styles.disabled}>
                        <OtziviLogo/>
                        Отзывы
                    </Link>
                </li>

                <li className = {pathname.includes('/oformit-zakaz') ? `${styles.active}` : null}>
                    <Link href = '/oformit-zakaz/page/1'>
                        <OformitLogo/>
                        Оформить заказ
                    </Link>
                </li>
            </ul>
    
            <div className = {styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Sidebar;