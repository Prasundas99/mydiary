import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import { useStyles } from "../styles/NewnoteStyling";

function NewNote() {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={1} className={classes.Paper}>
        <Typography variant="h4" align="center">
          {" "}
          New Note
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
          variant='filled'
        />
        <br />

        <Button
          className={classes.btn}
          style={{ background: "rgb(38 98 137)", color: "#fff" }}
        >
          Post
        </Button>
      </Paper>
    </div>
  );
}

export default NewNote;
