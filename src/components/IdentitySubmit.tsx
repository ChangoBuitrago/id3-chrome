import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { ActiveProfile } from "../chrome/utils";
import xLogoWhite from '../assets/x-logo-white.svg';

export interface Identity {
  name?: string
	revoke?: boolean
}

interface IdentitySubmitProps {
  activeProfile: ActiveProfile;
  onVerifyIdentity: () => void;
}

const IdentitySubmit = ({ activeProfile, onVerifyIdentity }: IdentitySubmitProps) => {
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
        <img src={xLogoWhite} alt="X-logo-white" style={{ width: "72px" }} />
      </Grid>

      <Grid
        item container
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: "16px",
          padding: "8px 0px",
          backgroundColor: "#16181c",
          mb: "32px"
        }}
      >
        <Avatar
          alt={activeProfile.username} 
          src={activeProfile.avatar} 
          sx={{ 
            width: "72px", 
            height: "72px", 
            outlineWidth: "4px",
            outlineStyle: "solid",
            outlineColor: (theme) =>  theme.palette.background.default,
            mr: "16px"
          }}
        >
        </Avatar>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "800"
            }}
          >
            {activeProfile.name}
          </Typography>
        
          <Typography
            variant="body2"
            sx={{
              fontWeight: "300",
              color: "#71767b"
            }}
          >
            @{activeProfile.username}
          </Typography>

          <Typography
            variant="subtitle1"
            color="primary"
            sx={{
              fontWeight: "500"
            }}
          >
            w3n:{activeProfile.w3n}
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
      >
        <Button 
          variant="contained"
          color="primary"
          onClick={onVerifyIdentity}
          sx={{
            height: "40px",
            width: "200px"
          }}
        >
          verify identity
        </Button>
      </Grid>
    </Grid>
  );
};

export default IdentitySubmit;