import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import verifiedIcon from '../assets/verified.svg';

export interface Profile {
  links: Record<string, string>
  revoke: boolean
}

interface ProfileVerifiedProps {
  profile: Profile
}

const socialIcons: Record<string, JSX.Element> = {
  email: <EmailIcon />,
  website: <LanguageIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />
  // ToDo: Add default icon.
}

const ProfileVerified = ({ profile: { links } }: ProfileVerifiedProps) => {
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
        <img src={verifiedIcon} alt="verified-icon" style={{ width: "100px" }} />
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
          Profile has been successfully verified.
        </Typography>
      </Grid>

      { links && 
        <Grid
          item container
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            m: "16px"
          }}
        >
          { Object.keys(links).map((platformName) => (
            <Grid
              item
              key={platformName}
            >
              <Button 
                component="a" 
                href={links[platformName]} 
                onClick={(evt) => {
                  evt.preventDefault();
                  chrome.tabs.update({ url: links[platformName] });
                }}
                variant="text"
                sx={{
                  minWidth: "0px"
                }}
                rel="noopener noreferrer"
              >
                { socialIcons[platformName] }
              </Button>
            </Grid>
          ))}
        </Grid>
      }
    </Grid>
  );
};

export default ProfileVerified;