import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost, getUpdates } from "../redux/actions/notesAction";
//Styling
import { useStyles } from "../styles/NewnoteStyling";
import { useParams } from "react-router";
import { useEffect, useState } from "react";


 function EditNewNote() {
  const { notes=[] , error } = useSelector((state) => state.userNotes);
  console.log(notes.body);
  
const {id}  = useParams();
console.log(id);

const [title, settitle] = useState("");
const [body, setbody] = useState("");

 const classes = useStyles();
   //Redux  
  const dispatch = useDispatch();

  useEffect(() => { 
    if (id && notes) {
      settitle(notes.title);
      setbody(notes.body);
      }
    else {
      alert(error);
      
    } },[id, notes]) ;

    
  useEffect(() => {
    dispatch(getUpdates(id));
  },dispatch, updatePost [id]);
  //Update Post
  const handelClickUpdate = () => {
    dispatch(updatePost(id, title, body ));
  };
  //Delete Post
  const handleClickDelete = (event) => {
    dispatch(deletePost(id));
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
          onLoad= {title}
          value= {title}
          onChange={(e) => settitle(e.target.value)}
        />

        <TextField
          placeholder="Write your Note here....."
          multiline
          rows={18}
          rowsMax={9}
          className={classes.textArea}
          variant="filled"
          value={body}
          onChange={(e) => setbody(e.target.value)}
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
