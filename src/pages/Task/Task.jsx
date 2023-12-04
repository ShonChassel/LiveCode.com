import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./task.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Task = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error } = useFetch(
        `http://localhost:8800/api/tasks/find/${id}`
    );

    const [details, setDetails] = useState({
        title: '',
        code: '',
    });

    useEffect(() => {
        if (data) {
            setDetails({
                title: data.title || '',
                code: data.code || '',
            });
        }
    }, [data]);

    const handleClick = async (e) => {
        try {
            const res = await axios.post(`http://localhost:8800/api/tasks/${data._id}/`, details);
        } catch (err) {
            console.log(err);
        }
    }
    console.log(details);

    return (
        <div className="taskDetails">

            <div className="task-container">
                <input type="text" placeholder={details.title} />
                <input
                    type="text"
                    value={details.code}
                    onChange={(e) => setDetails({ ...details, code: e.target.value })}
                />
            </div>

        </div>
    );

};

export default Task;