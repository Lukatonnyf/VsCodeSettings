import { Divider, Grid } from '@chakra-ui/react';

const CustomDivider = () => (
  <Grid templateColumns="1fr 1fr" columnGap={12} opacity={0.4}>
    <Divider my={6} />
    <Divider my={6} />
  </Grid>
);

export default CustomDivider;
