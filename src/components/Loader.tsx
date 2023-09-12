import { Box, CircularProgress, Grid, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Grid
      item container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        width: "100%"
      }}
    >
      <Grid
        item
      >
        <Box 
          sx={{ 
            position: 'relative', 
            display: 'inline-flex' 
          }}
        >
          <CircularProgress 
            size={100} 
            thickness={1}
            color="secondary"
          /> 
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              color="secondary"
              sx={{
                fontWeight: "800",
              }}
            >
              ID3
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loader;
