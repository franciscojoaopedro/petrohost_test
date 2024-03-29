import { Card, Title, Price, Features, Feature, Button } from './Card';

function CardInfo() {
  return (
    <Card>
      <Title>Plano Plus+</Title>
      <Price>190.990kz</Price>
      <Features>
        <Feature>Domínio Grátis .ao, .com</Feature>
        <Feature>110GB Espaço SSD</Feature>
        <Feature>Permite 10 Sites</Feature>
        <Feature>CPU 3 Nucleo</Feature>
        <Feature>limite de 550.000 arquivos</Feature>
        <Feature>70 contas de Email</Feature>
        <Feature>20 MySQL</Feature>
        <Feature>Backups Semanais</Feature>
        <Feature>SSL Lets Encrypt Grátis</Feature>
        <Feature>Uptime de 99.9%</Feature>
      </Features>
      <Button>ADICIONAR AO CARRINHO</Button>
    </Card>
  )
}

export default CardInfo