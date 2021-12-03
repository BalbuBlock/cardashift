import { Button } from 'app/App.components/Button/Button.controller'
import { Card, MainLogo } from 'styles'
import { RulesStyled, RulesText } from './Rules.style'

export const RulesView = () => {
  return (
    <RulesStyled>
      <MainLogo src="/logo.svg" alt="logo" />
      <Card widthOverride="800px">
        <RulesText>Do not steal!</RulesText>
        <Button text="I accept" icon="arrow" />
      </Card>
    </RulesStyled>
  )
}
