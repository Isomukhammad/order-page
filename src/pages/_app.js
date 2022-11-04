import Header from '../components/header/header.component'
import Sidebar from '../components/sidebar/sidebar.component'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className = 'container'>
      <Header/>

      <Component {...pageProps}/>
    </div>
  ) 
}

export default MyApp
