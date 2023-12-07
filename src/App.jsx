import { useState, useEffect, useContext } from "react";
import "./App.css";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Stack,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";

import Card from "./components/Card";
import { CardContext } from "./context/cardContextProvider";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [items, setItems] = useContext(CardContext);

  const handleSearch = () => {
    return items.filter((cont) =>
      cont.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              color="black"
              textAlign="center"
            >
              React Assignment
            </Typography>
            <TextField
              label="search card "
              variant="outlined"
              style={{ width: "50%", color: "white" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></TextField>
          </Toolbar>
        </AppBar>
      </Box>
      <Container style={{ textAlign: "center" }} maxWidth="fixed">
        <Grid sx={{ flexGrow: 2 }} container spacing={3} mt="30px">
          <Grid container justifyContent="center" spacing={2}>
            {handleSearch().map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
