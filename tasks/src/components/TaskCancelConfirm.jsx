import { DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export const TaskCancelConfirm = function (props) {
  const handleClose = () => {
    props.onCloseHandler();
  };
  const confirmDelete = () => {
    props.delTask(props.task);
    handleClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose} fullWidth>
        <DialogTitle>Delete Task</DialogTitle>
        <DialogContent>Are you sure?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <form id="formDelete" action="" method="GET">
            <Button onClick={confirmDelete} variant="contained">
              Delete
            </Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
};
