import Router, { useRouter } from 'next/router';

import RightArrowIcon from '../../design/icons/Arrow - Right.svg';
import LeftArrowIcon from '../../design/icons/Arrow - Left.svg';

import styles from './page-row.module.scss'

const PageRow = ({list}) => {
    const router = useRouter();
    const { page } = router.query;
    console.log(typeof(page));

    const prevPage = () => {
        if(+page !== 1){
            Router.push(`/oformit-zakaz/page/${+page-1}`)
        }
    }

    const nextPage = () => {
        Router.push(`/oformit-zakaz/page/${+page+1}`)
    }

    const row = Math.ceil(list.length/10);
    return(
        <div className = {styles.container}>
            <LeftArrowIcon onClick = {prevPage}/>
            <div className = {styles.pages}>
                {list.map((num, index) => {
                    if(index < 2) {
                        return (
                            <div 
                                key = {index}
                                className = {index === (page - 1) ? `active` : null}
                                onClick = {() => Router.push(`/oformit-zakaz/page/${index+1}`)}
                            >
                                    {index + 1}
                            </div>
                        )
                    }
                })}
            </div>
            <RightArrowIcon onClick = {nextPage}/>
        </div>
    )
}

export default PageRow;