import React from 'react';

import { Container } from './styles';

const EntryCreate: React.FC = () => (
  <Container>
    <input type="button" value="TEXTO" />
    <input type="button" value="IMAGEM" />
    <input type="button" value="VIDEO" />
    <input type="button" value="LOCALIZAÇÃO" />
  </Container>
);

export default EntryCreate;
