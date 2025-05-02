import {BrowserRouter as Router} from 'react-router-dom'
import AllRoutes  from './routes/AllRoutes'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="overflow-x-hidden  bg-[#111111] min-h-screen font-[Inter] font-semibold text-[15px] scrollbar scrollbar-thumb-black ">

      <Router >
        <Header />
          <AllRoutes />
        </Router>
      <Footer />

    </div>
  )
}

export default App;