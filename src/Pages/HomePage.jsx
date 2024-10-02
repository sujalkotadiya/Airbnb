import { Route, Routes } from "react-router-dom"
import MenuPage from "./MenuPage"
import IconPage from "./Screenpage/IconPage"
import AmazingViews from "./Screenpage/AmazingViews"
import AmazingPools from "./Screenpage/AmazingPools"
import Farms from "./Screenpage/Farms"
import World from "./Screenpage/World"
import LakeFront from "./Screenpage/LakeFront"
import Omg from "./Screenpage/Omg"
import Castel from "./Screenpage/Castel"
import Beach from "./Screenpage/Beach"
import Luxe from "./Screenpage/Luxe"
import TinyHomes from "./Screenpage/TinyHomes"
import Cabins from "./Screenpage/Cabins"
import TreeHouse from "./Screenpage/TreeHouse"
import Historic from "./Screenpage/Historic"
import Mansions from "./Screenpage/Mansions"
import TopCities from "./Screenpage/TopCities"
import Caves from "./Screenpage/Caves"
import Rooms from "./Screenpage/Rooms"

const HomePage = () => {
    return (
        <>
            <MenuPage />
            <Routes>
                <Route path="/" element={<IconPage />} />
                <Route path="/icons" element={<IconPage />} />
                <Route path="/amazing-views" element={<AmazingViews />} />
                <Route path="/amazing-pools" element={<AmazingPools />} />
                <Route path="/farms" element={<Farms />} />
                <Route path="/top-of-the-world" element={<World />} />
                <Route path="/lakefront" element={<LakeFront />} />
                <Route path="/omg" element={<Omg />} />
                <Route path="/castles" element={<Castel />} />
                <Route path="/beachfront" element={<Beach />} />
                <Route path="/luxe" element={<Luxe />} />
                <Route path="/tiny-homes" element={<TinyHomes />} />
                <Route path="/cabins" element={<Cabins />} />
                <Route path="/treehouses" element={<TreeHouse />} />
                <Route path="/historical-homes" element={<Historic />} />
                <Route path="/mansions" element={<Mansions />} />
                <Route path="/top-cities" element={<TopCities />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/caves" element={<Caves />} />
            </Routes>
        </>
    )
}

export default HomePage