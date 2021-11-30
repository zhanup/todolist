import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  )
}

export default App
