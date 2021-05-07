import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from '@material-ui/core/Container';

import { useStyles } from "../styles/NotesStyling";

function NotesCard() {
    function randomColor() {
        let hex = Math.floor(Math.random() * 0x01171c);
        let color = "#" + hex.toString(18);
       return color;
      }
    const classes = useStyles();
    return (
    <Container>    
    <Grid container spacing={6}>
      {/* Left Section 1 */}
        <Grid item xs={12} md={12} lg={4}>
            <Paper className={classes.CardOne} elevation={3} style={{backgroundColor: randomColor()}}>
                <Typography variant='h4' component='h1'>
                    Title
                </Typography>
                <Typography variant='body1'>
                    lorem ipsum lorem lorem lorem
                </Typography>
            </Paper>
        </Grid>
      </Grid>
    </Container>  
  );
}

export default NotesCard
