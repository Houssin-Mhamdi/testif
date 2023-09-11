import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../Redux/TaskSlice";

export default function TaskList() {
  const [dataTask, setDataTask] = useState(false);
  const [ids, setIds] = useState(1);
  const [AllDataTasks, setAllDataTasks] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const { data, loading, error } = useSelector((state) => state.task);
  console.log(data?.data);

  const toggleCompleted = (id) => {
    console.log(id);
    setIds(id);
  };

  return (
    <>
      {loading && "Loading..."}
      {data?.data?.map((task) => {
        return (
          <div className="flex items-center justify-between" key={task.id}>
            <p className=""> Title: {task.title}</p>
            <p className="ml-5">IsCompleted {JSON.stringify(task.completed)}</p>
            <button
              className={`${
                task.completed ? "text-blue-400" : "text-red-950"
              }`}
              onClick={() => toggleCompleted(task.id)}
            >
              {task.id == ids || task.completed ? "Completed" : "Pending"}
            </button>
          </div>
        );
      })}
    </>
  );
}
