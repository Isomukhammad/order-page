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
    console.log(pathname);
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
                    <Link href = '/zakazi'>   
                        <ZakaziLogo/>
                        Заказы
                    </Link>
                </li>

                <li className = {pathname === '/tovari' ? `${styles.active}` : null}>
                    <Link href = '/tovari'>
                        <TovariLogo/>
                        Товары
                    </Link>
                    
                </li >

                <li className = {pathname === '/otzivi' ? `${styles.active}` : null}>
                    <Link href = '/otzivi'>
                        <OtziviLogo/>
                        Отзывы
                    </Link>
                </li>

                <li className = {pathname === '/oformit-zakaz' ? `${styles.active}` : null}>
                    <Link href = '/oformit-zakaz'>
                        <OformitLogo/>
                        Оформить заказ
                    </Link>
                </li>
            </ul>
            
            {children}
        </div>
    )
}

export default Sidebar;