import Navbar from "../component/navbar/Navbar";
import Featured from "../component/featured/Featured";
import "./home.scss";
import List from "../component/list/List";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;
