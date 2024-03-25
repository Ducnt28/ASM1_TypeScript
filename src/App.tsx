
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList/ProductList'
import NotFound from './Pages/NotFound'
import About from './Pages/About'
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [ProductList, setProducts]
  return (
    <div className='container-fluid p-0'>
    <Header/>
    <main className='pt-3 pb-3'>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/:id' element={<ProductDetailPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
