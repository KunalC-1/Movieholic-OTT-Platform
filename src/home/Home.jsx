import Navbar from "../component/navbar/Navbar";
import Featured from "../component/featured/Featured";
import "./home.scss";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured type="movie" />
        </div>
    );
};

export default Home;
