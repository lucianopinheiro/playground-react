import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Taskform } from "./Taskform";
import { TaskCancelConfirm } from "./TaskCancelConfirm";

export const TaskItem = function (props) {
  const [openForm, setOpenForm] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  const handleClickOpen = () => {
    setOpenForm(true);
  };
  const handleClose = () => {
    setOpenForm(false);
  };
  const handleClickCancel = () => {
    setOpenCancel(true);
  };
  const handleCancel = () => {
    setOpenCancel(false);
  };

  return (
    <tr key={props.task.title.toLowerCase().replace(" ", "-")}>
      <td>{props.task.added}</td>
      <td>{props.task.title}</td>
      <td className="actions">
        <Button variant="outlined" onClick={handleClickOpen} startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={handleClickCancel} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Taskform open={openForm} onCloseHandler={handleClose} task={props.task} editTask={props.editTask} />
        <TaskCancelConfirm open={openCancel} onCloseHandler={handleCancel} task={props.task} delTask={props.delTask} />
      </td>
    </tr>
  );
};
