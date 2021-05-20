import NewnoteBox from "../component/NewnoteBox";
import NotesCard from "../component/NotesCard";
import IntroIllustration from "../component/IntroIllustration";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/notesAction";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";

function Home() {
  const dispatch = useDispatch();
  const { Notes } = useSelector((state) => state.Notes);

  useEffect(() => {
    dispatch(getPosts());
    console.log(getPosts());
  }, [dispatch]);

  console.log(Notes);
  //console.log(userNotes);

  return (
    <>
      <NewnoteBox />
{/*      {notes.map((userNotes) =>(
      <Grid    item xs={12}>
      <NotesCard />
      </Grid>
))}
*/}
    </>
  );
}

export default Home;
