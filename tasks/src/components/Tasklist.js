import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { TaskItem } from "./Taskitem";
import { Taskform } from "./Taskform";
import { initialTasks } from "../data";

export const Tasklist = function (props) {
  const [openForm, setOpen] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addTask = (task) => {
    setTasks((oldtasks) => [...oldtasks, task]);
    console.log(task);
  };
  const editTask = (task) => {
    console.log(task);
    setTasks((oldtasks) => {
      return oldtasks.map((t) => {
        if (t.id === task.id) {
          t = task;
        }
        return t;
      });
    });
  };
  const delTask = (task) => {
    console.log("delTask", task.id, task.title);
    let n = tasks.indexOf(task);
    tasks.splice(n, 1);
    setTasks([...tasks]);
  };

  const items = tasks.map((task) => <TaskItem task={task} editTask={editTask} delTask={delTask} key={"task" + task.id} />);

  return (
    <main className="App-content">
      <table>
        <thead>
          <tr>
            <th>Added at</th>
            <th>Task name</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>
              <Fab color="primary" aria-label="New Task" className="mt-2">
                <AddIcon onClick={handleClickOpen} />
              </Fab>
              <Taskform open={openForm} onCloseHandler={handleClose} task={{}} tasks={tasks} addTask={addTask} />
            </td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
};
