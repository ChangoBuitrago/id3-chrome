import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { TwitterBio, getTwitterBio } from './chrome/utils'
import Header from './components/Header'
import Loader from './components/Loader'
import ProfileNotFound from './components/ProfileNotFound'
import ProfileRevoked from './components/ProfileRevoked'
import ProfileVerified, { Profile } from './components/ProfileVerified'

const getProfile = (twitterBio: TwitterBio | null | undefined): Profile | null => {
  const username: string | undefined = twitterBio?.username

  let profile: Profile | null = null
  if (username === "drgorb") {
    profile = {
      links: {
        email: "mailto:micha.roon@managination.com",
        website: "https://hashgraph-association.com",
        twitter: "https://twitter.com/drgorb",
        linkedin: "https://linkedin.com/in/micha",
        github: "https://github.com/drgorb",
      },
      revoke: false,
    }
  } else if (username !== "drgorb") {
    profile = {
      links: {},
      revoke: true,
    }
  }

  return profile
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [twitterBio, setTwitterBio] = useState<TwitterBio | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (twitterBio && !profile) {
      const fetchedProfile = getProfile(twitterBio);
      if (fetchedProfile) {
        setProfile(fetchedProfile);
      }
      setLoading(false)
    } else if (!twitterBio) {
      getTwitterBio((fetchedBio: TwitterBio | null) => {
        if (fetchedBio) {
          setTwitterBio(fetchedBio);
        } else {
          setLoading(false)
        }
      });
    }
  }, [twitterBio, profile])

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        height: "100%",
        width: "100%"
      }}
    >
    {!loading ? (
      <>
        <Header />
        {
          !profile 
            ? <ProfileNotFound /> 
            : !profile.revoke 
              ? <ProfileVerified profile={profile} />
              : <ProfileRevoked />
        }
      </>
    ) : (
      <Loader />
    )}
    </Grid>
  )
}
