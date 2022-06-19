
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Grid, Space, Table } from '@mantine/core';
function MantineUIBenchmark() {
    const theme = useMantineTheme();

    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];

    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
        </tr>
    ));

    const secondaryColor = theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7];

    const ExampleCard = () => {
        return (
            <Card shadow="md" p="lg">
                <Card.Section>
                    <Image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" height={160} alt="Norway" />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>Norway Fjord Adventures</Text>
                    <Badge color="pink" variant="light">
                        On Sale
                    </Badge>
                </Group>

                <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                    activities on and around the fjords of Norway
                </Text>

                <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                    Book classic tour now
                </Button>
            </Card>
        )
    }

    return (
        <Grid gutter={60} justify="center" columns={24} style={{ marginTop: 20}}>
            <Grid.Col span={6}><ExampleCard /></Grid.Col>
            <Grid.Col span={6}><ExampleCard /></Grid.Col>
            <Grid.Col span={6}><ExampleCard /></Grid.Col>
            <Grid.Col span={20}>
                <Table striped highlightOnHover>
                    <thead>
                        <tr>
                            <th>Element position</th>
                            <th>Element name</th>
                            <th>Symbol</th>
                            <th>Atomic mass</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </Grid.Col>
        </Grid>
    )
}

export default MantineUIBenchmark

