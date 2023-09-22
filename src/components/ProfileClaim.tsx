import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import xLogoWhite from '../assets/x-logo-white.svg';
import { TwitterBio } from "../chrome/utils";

export interface Profile {
  name?: string;
  links?: Record<string, string>;
  revoke?: boolean;
}

interface ProfileClaimProps {
  twitterBio: TwitterBio
  onClaimProfile: () => void
}

const ProfileClaim = ({ twitterBio, onClaimProfile }: ProfileClaimProps) => {
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
          alt={twitterBio.username} 
          src={twitterBio.avatar} 
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
            {twitterBio.name}
          </Typography>
        
          <Typography
            variant="body2"
            sx={{
              fontWeight: "300",
              color: "#71767b"
            }}
          >
            @{twitterBio.username}
          </Typography>
        </Box>
      </Grid>

      <Grid
        item
      >
        <Button 
          variant="contained"
          color="primary"
          onClick={onClaimProfile}
          sx={{
            height: "40px",
            width: "200px"
          }}
        >
          claim profile
        </Button>
      </Grid>
    </Grid>
  )
}

export default ProfileClaim