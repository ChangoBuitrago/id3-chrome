import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { ActiveProfile, getActiveProfile, isValidProfile } from './chrome/utils'
import Header from './components/Header'
import IdentityRevoked from './components/IdentityRevoked'
import IdentitySubmit, { Identity } from './components/IdentitySubmit'
import IdentityVerified from './components/IdentityVerified'
import Loader from './components/Loader'
import IdentityNotFound from './components/IdentityNotFound'

export default function App() {
  const [activeProfile, setActiveProfile] = useState<ActiveProfile>({})
  const [identity, setIdentity] = useState<Identity>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!activeProfile.w3n) {
      setLoading(true)

      isValidProfile((isValid:boolean) => {
        if (isValid) {
          getActiveProfile((activeProfile:ActiveProfile) => {
            if (activeProfile.w3n) {
              setActiveProfile(activeProfile)
            }
          })
        }
      })
    } 

    setTimeout(() => { setLoading(false) }, 2000)
  }, [activeProfile]);
  
  const onVerifyIdentity = () => {
    setLoading(true)

    setIdentity({ name: "Micha Roon", revoke: activeProfile.w3n === "buitrago" })

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
          {!activeProfile.w3n ? (
            <IdentityNotFound />
          ) : !identity.name ? (
            <IdentitySubmit 
              activeProfile={activeProfile} 
              onVerifyIdentity={onVerifyIdentity}
            />
          ) : !identity.revoke ? (
            <IdentityVerified />
          ) : (
            <IdentityRevoked />
          )}
        </>
      ) : (
        <Loader />
      )
    }
    </Grid>
  )
}
