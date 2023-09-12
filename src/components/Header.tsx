import SettingsIcon from "@mui/icons-material/Settings";
import { Grid, IconButton, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{
        width: "100%",
      }}
    >
      <Grid item>
        <Typography
          variant="h6"
          color="secondary"
          sx={{
            fontWeight: "800",
          }}
        >
          ID3
        </Typography>
      </Grid>
      <Grid 
        item
      >
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
