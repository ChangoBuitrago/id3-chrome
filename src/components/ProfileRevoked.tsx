import { Button, Grid, Typography } from "@mui/material";
import canceledIcon from '../assets/canceled.svg';

const ProfileRevoked = () => {
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
          Unfortunately, the profile has been revoked.
        </Typography>
        <Typography
          variant="caption"
        >
          If you are the owner of the profile, please contact us.
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
          contact us
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileRevoked;
