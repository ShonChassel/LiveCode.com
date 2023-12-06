import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import img from "../../style/setings.svg";
import "./taskList.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const TaskList = () => {
    let { data, loading, error } = useFetch("https://livecode-server.onrender.com/api/tasks/");
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const openTask = (taskId) => {
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
                                <div className="title">
                                    <img src={img} alt="" />
                                    <h1>{task.title}</h1>
                                </div>
                                <img src="https://res.cloudinary.com/dirvusyaz/image/upload/v1701777743/unnamed_rtkvkg.png" alt="" />
                            </div>

                            {/* <h1>{task.code}</h1> */}
                            <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                                backgroundColor: "#1D1E22",
                                maxWidth: '1200px'
                            }}>
                            {task.code}
                            </SyntaxHighlighter>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TaskList;