import { Grid, GridItem, Stack, Heading } from '@chakra-ui/react'
const FichaView = () => {
  return (
    <>
      <Grid w='100%' h='100%' gap={10} templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)'>
        <GridItem rowSpan={1} colSpan={1}>
          <Heading>Información General</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Heading>Perimetros Corporales</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Heading>Indice de masa corporal</Heading>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Heading>Indice de cintura cadera</Heading>
        </GridItem>

      </Grid>
    </>
  )
}

export default FichaView
