import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { postsAtom } from "../state/postsAtom";

export default function NewPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useAtom(postsAtom);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim() || !desc.trim()) {
      setError("Title and Description are required.");
      return;
    }

    // Add new post to Jotai state
    setPosts([
      ...posts,
      {
        title,
        desc,
        createdOn: new Date().toISOString(),
      },
    ]);

    setSuccess(true);
    setTimeout(() => navigate("/"), 1000); // Redirect to Home after success
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create a New Post
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Post created successfully!</Alert>}

      <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </form>
    </Container>
  );
}
