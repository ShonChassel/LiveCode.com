import useFetch from "../../hooks/useFetch";
import "./taskList.scss";

const TaskList = () => {
    let { data, loading, error } = useFetch("http://localhost:8800/api/tasks/");

    console.log("data", data);

    return (
        <div className="taskList">
            {loading ? (
                <div />
            ) : (
                <>
                    {data.map((task, i) => (
                        <div className="taskListItem" key={i}>
                            <h1>{task.title}</h1>
                            <h1>{task.code}</h1>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TaskList;