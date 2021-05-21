import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../redux/actions/notesAction";
//Styling
import { useStyles } from "../styles/NewnoteStyling";

function EditNewNote({currentId}) {
  const { notes, error } = useSelector((state) =>
    currentId ? state.notes.find((p) => p._id === currentId) : null
  );
  const classes = useStyles();
console.log(notes);
  //Redux
  const dispatch = useDispatch();
  //Update Post
  const handelClickUpdate = () => {
    dispatch(updatePost(notes._id));
  };
  //Delete Post
  const handleClickDelete = (event) => {
    dispatch(deletePost(notes._id));
  };
  return (
    <div>
      <Paper elevation={1} className={classes.Paper}>
        <Typography variant="h4" align="center">
          {" "}
          Edit Note
        </Typography>
        <br />
        <TextField
          label="Note Title"
          id="margin-none"
          className={classes.textField}
        />

        <TextField
          placeholder="Write your Note here....."
          multiline
          rows={18}
          rowsMax={9}
          className={classes.textArea}
          variant="filled"
        />
        <br />

        <Button
          className={classes.btn}
          style={{ background: "rgb(38 98 137)", color: "#fff" }}
          onClick={handelClickUpdate}
        >
          Update
        </Button>

        <Button
          className={classes.btndelete}
          style={{ background: "#892626", color: "#fff" }}
          onClick={handleClickDelete}
        >
          Delete
        </Button>
      </Paper>
    </div>
  );
}

export default EditNewNote;
