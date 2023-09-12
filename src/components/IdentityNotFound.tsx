import { Grid, Typography } from "@mui/material";
import lostIcon from '../assets/lost.svg';

const IdentityNotFound = () => {
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
        <img src={lostIcon} alt="lost-icon" style={{ width: "150px" }} />
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
          We haven't been able to find an Identity to verify.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IdentityNotFound;