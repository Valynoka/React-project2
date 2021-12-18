import './App.css';
import Header from "./components/Header/Header";

import {Outlet, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import Reviews from "./components/Reviews/Reviews";
import Works from "./components/Works/Works";


function App() {
  return (
      <Routes>
        <Route path={'/'} element = {<Layout/>}>
            <Route index element = {<StartPage/>}/>
            <Route path={'Reviews'} element = {<Reviews/>}/>
            <Route path={'Works'} element = {<Works/>}/>
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
