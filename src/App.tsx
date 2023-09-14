import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { ActiveProfile, getTwitterProfile } from './chrome/utils'
import Header from './components/Header'
import IdentityClaim, { Identity } from './components/IdentityClaim'
import IdentityRevoked from './components/IdentityRevoked'
import IdentityVerified from './components/IdentityVerified'
import Loader from './components/Loader'
import ProfileNotFound from './components/ProfileNotFound'
import identities from './data/identites.json'

const verifyIdentity = (activeProfile: ActiveProfile):Identity => {
  return identities.find(({name}) => activeProfile.name === name) as Identity;
}

export default function App() {
  const [activeProfile, setActiveProfile] = useState<ActiveProfile | undefined>()
  const [identity, setIdentity] = useState<Identity | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!activeProfile) {
      setLoading(true)

      getTwitterProfile((activeProfile: ActiveProfile | undefined) => {
        setActiveProfile(activeProfile)
      })
    } else {
      setIdentity(verifyIdentity(activeProfile))
    }
    
    setTimeout(() => { setLoading(false) }, 2000)
  }, [activeProfile]);
  
  const onClaimIdentity = () => {
    setLoading(true)

    // ...
    
    setTimeout(() => { setLoading(false) }, 2000)
  }

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
    {
      !loading ? (
        <>
          <Header />
          { !identity
              ? !activeProfile
                ? <ProfileNotFound />
                : <IdentityClaim 
                    activeProfile={activeProfile} 
                    onClaimIdentity={onClaimIdentity}
                  />
              : !identity.revoke 
                ? <IdentityVerified identity={identity} />
                : <IdentityRevoked />
          }
        </>
      ) : (
        <Loader />
      )
    }
    </Grid>
  )
}
