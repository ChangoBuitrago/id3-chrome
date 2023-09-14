import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import verifiedIcon from '../assets/verified.svg';
import { Identity } from './IdentityClaim';

export interface IdentityProps {
  identity: Identity
}

const socialIcons: Record<string, JSX.Element> = {
  email: <EmailIcon />,
  website: <LanguageIcon />,
  twitter: <TwitterIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />
}

const IdentityVerified = ({ identity }: IdentityProps) => {
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
          Identity has been successfully verified.
        </Typography>
      </Grid>

      { identity.links && 
        <Grid
          item container
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            m: "16px"
          }}
        >
          { Object.keys(identity.links).map((platform) => (
            <Grid
              item
              key={platform}
            >
              <Button 
                component="a" 
                href={identity.links?.[platform]} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="text"
                sx={{
                  minWidth: "0px"
                }}
              >
                {socialIcons[platform]}
              </Button>
            </Grid>
          ))}
        </Grid>
      }
    </Grid>
  );
};

export default IdentityVerified;