import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import MembersPage from "./pages/MembersPage/MembersPage";
import RolePage from "./pages/RolePage/RolePage";
import NightPage from "./pages/NightPage/NightPage";
import DayPage from "./pages/DayPage/DayPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/members'} element={<MembersPage/>}/>
                    <Route path={'/role'} element={<RolePage/>}/>
                    <Route path={'/night'} element={<NightPage/>}/>
                    <Route path={'/day'} element={<DayPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
