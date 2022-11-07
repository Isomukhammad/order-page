import TradeIcon from '../../design/icons/Акция-trade in.svg';
import BundleIcon from '../../design/icons/Акция-bundle.svg';
import SaleIcon from '../../design/icons/Акция-скидка.png'
import IphoneSaleIcon from '../../design/icons/Акция-IMEI.svg'

import styles from './sales.module.scss'
import { useState,useEffect } from 'react';

const Sales = ({children, title, subtitle, info, status}) => {
    return(
        <div className = {styles.container}>
            <div className = {styles.subcontainer}>
                {children}
                <div className = {styles.information}>
                    { title ? <h4>{title}</h4> : null}
                    { subtitle ? <p>{subtitle}</p> : null }           
                    { info ? <span>{info}</span> : null}
                </div>
            </div>

            <input 
                className = {status === 1 || status.toString().includes('iPhone')? `${styles.active}`: `${styles.checkbox}`}
                type="checkbox" 
                disabled 
            />
        </div>
    )
}

export default Sales;