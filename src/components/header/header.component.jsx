import Image from 'next/image';

import { Inter } from '@next/font/google'

import profileImg from '../../design/icons/icon-личный кабинет.png';
import NotificationIcon from '../../design/icons/Notification.svg'

import styles from './header.module.scss'
import Link from 'next/link';

const inter = Inter();

const Header = () => (
    <div className = {styles.header}>
        <Link href = '/' className = {`${inter.className} ${styles.logo}`}>logo</Link>
        <div className = {styles.info}>
            <div className = {styles.notification}>
                <NotificationIcon/>
                <p className = {styles.message}>1</p>
            </div>
            <div className = {styles.account}>
                <p>Личный кабинет</p>
                <Image 
                    src={profileImg}
                    alt = {'Изображение профиля'}
                    width = {32}
                    height = {32}
                    placeholder = "blurDataURL"
                />
            </div>
        </div>
    </div>
)

export default Header;