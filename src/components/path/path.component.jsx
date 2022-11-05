import styles from './path.module.scss'

const Path = ({main, category, product}) => (
    <div className = {styles.path}>
        <span className = {category === undefined ? `${styles.active}` : null}>{main}</span> 
        {
            category ? (
                <span className = {product === undefined ? `${styles.active}` : null}> &#62; {category}</span>
            ) : (null)
        }
        {
            product !== undefined ? <span className = {styles.active}> &#62; {product}</span> : null
        }
    </div>
)

export default Path;