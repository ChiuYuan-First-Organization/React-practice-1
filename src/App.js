import { Fragment } from "react";
import { useSelector } from "react-redux";


import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';


const App = () => {
    const isLogin = useSelector(state => state.auth.isAuthenticated);
    return (
        <Fragment>
            <Header />
            {!isLogin && <Auth />}
            {isLogin && <UserProfile />}
            <Counter />
        </Fragment>
    );
};

export default App;