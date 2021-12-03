import { Button } from 'app/App.components/Button/Button.controller'
import { Link } from 'react-router-dom'
import { MainLogo } from 'styles'
import { LandingStyled } from './Landing.style'

export const LandingView = () => {
  return (
    <LandingStyled>
      <MainLogo src="/logo.svg" alt="logo" />

      <h1>Landing TBD</h1>

      <Link to="/rules">
        <Button text="Next" />
      </Link>
    </LandingStyled>
  )
}
