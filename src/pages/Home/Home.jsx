import Footer from "../../cmp/footer/Footer";
import Navbar from "../../cmp/navbar/Navbar";
import TaskList from "../../cmp/taskList/TaskList";
import "./home.scss";


const Home = () => {

    return (
        <div className="homeContainer">
            <Navbar />
            <h1>Choose code block</h1>
            <TaskList />
            <Footer />
        </div>

    );
};

export default Home;
