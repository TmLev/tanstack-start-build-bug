import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
