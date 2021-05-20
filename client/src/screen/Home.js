import NewnoteBox from "../component/NewnoteBox";
import NotesCard from "../component/NotesCard";
import IntroIllustration from "../component/IntroIllustration";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/notesAction";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { notes, error } = useSelector((state) => state.userNotes);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(notes);

  return (
    <>
      <NewnoteBox />
      <IntroIllustration />
      <NotesCard />
    </>
  );
}

export default Home;
