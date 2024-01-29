import { Container, Block, Title, StyledLink } from './SecondPage.styled';

export const SecondPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};