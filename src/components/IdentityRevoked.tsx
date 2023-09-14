import { Button, Grid, Typography } from "@mui/material";
import canceledIcon from '../assets/canceled.svg';

const IdentityRevoked = () => {
  return (
    <Grid
      item container
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%"
      }}
    >
      <Grid
        item
        sx={{
          mb: "16px"
        }}
        >
        <img src={canceledIcon} alt="canceled-icon" style={{ width: "100px" }} />
      </Grid>

      <Grid
        item
        sx={{
          m: "16px"
        }}
      >
        <Typography
          variant="subtitle1"
        >
          Regrettably, the identity has been revoked.
        </Typography>
      </Grid>

      <Grid
        item
      >
        <Button 
          variant="contained"
          color="primary"
          sx={{
            height: "40px",
            width: "200px"
          }}
        >
          reach out
        </Button>
      </Grid>
    </Grid>
  );
};

export default IdentityRevoked;
