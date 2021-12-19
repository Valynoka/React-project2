import './App.css';
import Header from "./components/Header/Header";

import {Outlet, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import StartPage from "./components/StartPage/StartPage";
import Reviews from "./components/Reviews/Reviews";
import Works from "./components/Works/Works";
import Modal from "./components/Modal/Modal";
import {createContext, useState} from "react";
import Management from "./components/Management/Management";
import Manager from "./components/Manager/Manager";


export const AppContext = createContext(null);

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <AppContext.Provider value = {{isAuth, setIsAuth, isVisible, setIsVisible}}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path={'Reviews'} element={<Reviews/>}/>
                    <Route path={'Works'} element={<Works/>}/>
                    <Route path={'Management'} element={<ManagementLayout/>}>
                        <Route index element = {<Management/>}/>
                        <Route path={':userId'} element={<Manager/>}/>
                    </Route>
                </Route>
            </Routes>
        </AppContext.Provider>

    );
}



function Layout() {
    return (
        <div className="App">
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
            <Modal/>
        </div>
    )
}

function ManagementLayout() {
    return(
        <Outlet/>
    )
}

export default App;
