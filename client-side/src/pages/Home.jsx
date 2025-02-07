import { useAtom } from "jotai";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { postsAtom } from "../state/postsAtom";

export default function Home() {
  const [posts] = useAtom(postsAtom); 

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to MyDiary!
      </Typography>

      {posts.length === 0 && <Typography>No posts found.</Typography>}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {posts.map((post, index) => (
          <Card key={index} elevation={3} sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>
              <Typography variant="body1">{post.desc}</Typography>
              <Typography variant="caption" color="textSecondary">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(post.createdOn))}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
