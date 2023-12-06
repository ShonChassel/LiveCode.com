import Footer from "../../cmp/footer/Footer";
import TaskList from "../../cmp/taskList/TaskList";
import "./home.scss";
import backImg from "../../style/44.svg";


const Home = () => {

    return (
        <div className="homeContainer">
            <h1>Choose code block</h1>
            <TaskList />
            <img className="img-back" src={backImg} alt="" />
            <Footer />
        </div>

    );
};

export default Home;
