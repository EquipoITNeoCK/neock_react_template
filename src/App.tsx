import { Box, Typography } from "@mui/material";
import AppRouter from "./app-router";
import "./app.css";

function App() {
	return (
		<>
			<AppRouter />
			<Box>
				<Typography>Para usar en neoCK</Typography>
			</Box>
		</>
	);
}

export default App;
