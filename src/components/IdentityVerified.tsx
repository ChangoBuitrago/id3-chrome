import { Grid, Typography } from "@mui/material";
import verifiedIcon from '../assets/verified.svg';

const IdentityVerified = () => {
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
        <img src={verifiedIcon} alt="verified-icon" style={{ width: "150px" }} />
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
          Identity has been successfully verified.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default IdentityVerified;
