

const TaskList = () => {
    let { data, loading, error } = useFetch();

    return (

        <div className="pList">
            {loading ? (
                <Skeleton />
            ) : (
                <>
                    {data.map((task, i) => (
                        <div className="pListItem" key={i}>
                            <h1>{task[i]?.title}</h1>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default TaskList;