import SearchIcon from '../../design/icons/Search.svg'
import styles from './search-bar.module.scss';

const SearchBar = ({placeholder}) => {
    return(<>
        <form className = {styles.search}>
            <input 
                type="text" 
                placeholder = {placeholder}
            />
            <button><SearchIcon/></button>
        </form>
        </>
    )
}

export default SearchBar;