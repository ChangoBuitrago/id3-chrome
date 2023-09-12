import { Grid, Typography } from "@mui/material";
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
        <img src={canceledIcon} alt="canceled-icon" style={{ width: "150px" }} />
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
    </Grid>
  );
};

export default IdentityRevoked;
