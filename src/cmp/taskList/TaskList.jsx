import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import img from "../../style/setings.svg";
import "./taskList.scss";

const TaskList = () => {
    let { data, loading, error } = useFetch("http://localhost:8800/api/tasks/");
    console.log("data", data);

    const navigate = useNavigate();

    const openTask = (taskId) => {
        console.log(taskId);
        navigate(`/tasks/${taskId}`);
    };

    return (
        <div className="taskList">
            {loading ? (
                <div />
            ) : (
                <>
                    {data.map((task, i) => (
                        <div className="taskListItem" key={i} onClick={() => openTask(task._id)}>
                            <div className="title-container">
                                <img src={img} alt="" />
                                <h1>{task.title}</h1>
                            </div>

                            <h1>{task.code}</h1>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TaskList;