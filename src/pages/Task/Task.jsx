import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./task.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import io from 'socket.io-client'
import Editor from '@monaco-editor/react'

import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

const socket = io.connect("http://localhost:3003")

const Task = () => {
    const location = useLocation();
    const { user, dispatch } = useContext(AuthContext);
    const id = location.pathname.split("/")[2];
    const { data, loading, error } = useFetch(
        `http://localhost:8800/api/tasks/find/${id}`
    );

    const [details, setDetails] = useState({
        title: '',
        code: '',
    });

    useEffect(() => {
        socket.on("receive_message", (message) => {
            setDetails({
                title: message.title,
                code: message.code,
            });
        })

        if (data) {
            setDetails({
                title: data.title || '',
                code: data.code || '',
            });
        }
    }, [data], [socket]);

    const handleClick = async (e) => {
        console.log(e);
        const updatedDetails = { code: e };

        try {
            setDetails(updatedDetails);
            socket.emit('send_message', updatedDetails);
            const res = await axios.put(`http://localhost:8800/api/tasks/${data._id}/`, updatedDetails);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="taskDetails">

            <div className="task-container">
                <div className="task-header">
                    <h1>{data.title}</h1>
                </div>

                <Editor
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    value={details.code}
                    onChange={(e) => handleClick(e)}
                    style={{ backgroundColor: '#343541' }}
                />

            </div>

        </div>
    );

};

export default Task;


{/* <textarea
                    rows={4}
                    className="code-input"
                    value={details.code}
                    onChange={(e) => handleClick(e)}
                /> */}