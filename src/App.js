import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Welcome to our premier martial arts shop, offering the finest selection of high-quality products and gear!"/>
    </div>
  )
}

export default App