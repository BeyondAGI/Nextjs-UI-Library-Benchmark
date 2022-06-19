import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Badge, Box, Grid, GridItem, Image, SimpleGrid, VStack, Wrap, WrapItem } from "@chakra-ui/react"
import { Container } from "@nextui-org/react"
import ComplexTable from "./components/ComplexTable"

function ChakraBenchmark() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    const tableList = [
        {
            "name": "Marketplace",
            "status": "Approved",
            "date": "24.Jan.2021",
            "progress": 75.5
        },
        {
            "name": "Marketplace",
            "status": "Disable",
            "date": "30.Dec.2021",
            "progress": 25.5
        },
        {
            "name": "Marketplace",
            "status": "Error",
            "date": "20.May.2021",
            "progress": 90
        },
        {
            "name": "Marketplace",
            "status": "Approved",
            "date": "12.Jul.2021",
            "progress": 50.5
        }
    ]

    const columnsDataComplex = [
        {
            Header: "NAME",
            accessor: "name",
        },
        {
            Header: "STATUS",
            accessor: "status",
        },
        {
            Header: "DATE",
            accessor: "date",
        },
        {
            Header: "PROGRESS",
            accessor: "progress",
        },
    ];

    const ExampleCard = () => {
        return (<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {property.beds} beds &bull; {property.baths} baths
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {property.title}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / wk
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>)
    }

    return (
        <VStack>
            <Grid templateColumns='repeat(3, 1fr)' gap={2}>
                <GridItem w='100%'><ExampleCard /></GridItem>
                <GridItem w='100%'><ExampleCard /></GridItem>
                <GridItem w='100%'><ExampleCard /></GridItem>

            </Grid>
            <Container>
            <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={tableList}
                />
            </Container>

        </VStack>

    )
}

export default ChakraBenchmark