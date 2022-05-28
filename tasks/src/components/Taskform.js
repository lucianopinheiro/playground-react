import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Taskform = function (props) {
  const handleClose = () => {
    props.onCloseHandler();
  };

  const handleTask = () => {
    if (props.addTask) {
      console.log("handle add task");
      task = { id: uuidv4(), title: document.getElementById("title").value, added: document.getElementById("added").value };
      props.addTask(task);
    } else {
      console.log("handle edit task");
      task = { id: props.task.id, title: document.getElementById("title").value, added: document.getElementById("added").value };
      props.editTask(task);
    }
    handleClose();
  };

  let task = props.task;

  const dialogTitle = props.task.title ? "Edit Task" : "New Task";
  const dialogButton = props.task.title ? "Edit" : "Create";

  return (
    <form id={"form" + task.id}>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>Added at</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="added"
            id="added"
            aria-label="Format yyyy-mm-dd"
            type="date"
            defaultValue={props.task.added}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText>Task title</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            id="title"
            aria-label="Title"
            type="text"
            defaultValue={props.task.title}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleTask} variant="contained">
            {dialogButton}
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
