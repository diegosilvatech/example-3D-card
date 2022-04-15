import { BrandCard, Container } from 'components';

import * as s from './styles';

export default function Home() {
  return (
    <s.Wrapper>
      <Container>
        <BrandCard />
      </Container>
    </s.Wrapper>
  );
}
