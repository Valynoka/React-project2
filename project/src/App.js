import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";

import {Outlet, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import IndexPage from "./components/IndexPage/IndexPage";


function App() {
  return (
      <Routes>
        <Route path={'/'} element = {<Layout/>}>
            <Route index element = {<IndexPage/>}/>


        </Route>
      </Routes>
  );
}

function Layout(){
  return(
      <div className="App">
        <Header/>
        <main className={'content'}>
          <Outlet/>
        </main>
        <Footer/>
      </div>
  )
}


export default App;
