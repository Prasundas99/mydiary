import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

//Redux
import { useDispatch } from 'react-redux';
import { getPosts } from "../redux/actions/notesAction";
import { useEffect } from "react";

import { useStyles } from "../styles/NotesStyling";

function NotesCard({notes, setCurrentId}) {

console.log(notes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

    function randomColor() {
        let hex = Math.floor(Math.random() * 0x01171c);
        let color = "#" + hex.toString(18);
       return color;
      }
    const classes = useStyles();
    return (
 <>
      {/* Left Section 1 */}
            <Paper className={classes.CardOne} elevation={3} style={{backgroundColor: randomColor()}}>
                <Typography variant='h4' component='h1'>
                    {notes.title}
                </Typography>
                <Typography variant='body1'>
                   {notes.body}
                </Typography>
            </Paper>
   </>       
  );
}

export default NotesCard
