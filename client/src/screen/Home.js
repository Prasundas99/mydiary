import NewnoteBox from "../component/NewnoteBox";
import NotesCard from "../component/NotesCard";
import Grid from "@material-ui/core/Grid";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/notesAction";
import { useEffect } from "react";
import { Container } from "@material-ui/core";

function Home() {
  const {notes} = useSelector((state) => state.userNotes);
  // console.log(notes);
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    // console.log(getPosts());
  }, [dispatch]);

  return (
    <>
      <NewnoteBox />
      <Container >
        <Grid container spacing={3}>
          {notes && notes.map(function mapfun(currentElement){
            return(
              <Grid style={{cursor:"pointer"}} key={currentElement._id} item xs={12} md={4} lg={4}>
                <NotesCard  notes={currentElement} />
              </Grid>
            )
          })}
          ;
        </Grid>
      </Container>


    </>
  );
}

export default Home;
