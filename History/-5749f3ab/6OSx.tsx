import React from 'react';
import Divider from '@chakra-ui/react/dist/Divider';
import { Grid } from '@chakra-ui/react';

// import { Container } from './styles';

const Divider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}
      <Divider marginY={6} />
      <Divider marginY={6} />
      <ChakraDivider marginY={6} />
    </Grid >
  );
}

export default Divider;
