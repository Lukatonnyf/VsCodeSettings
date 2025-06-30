import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Divider as ChakraDivider } from '@chakra-ui/layout';

// import { Container } from './styles';

const CustomDivider: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}
    >
      <ChakraDivider marginY={6} />
      <ChakraDivider marginY={6} />
    </Grid >
  );
}

export default CustomDivider;
