import { Card, useAsyncList, useCollator } from "@nextui-org/react"
import { Grid } from "@nextui-org/react"
import { Text } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { Table, Row, Col, Tooltip, User } from "@nextui-org/react";
import { DeleteIcon } from "./components/TableItems/DeleteIcon";
import { EditIcon } from "./components/TableItems/EditIcon";
import { EyeIcon } from "./components/TableItems/EyeIcon";
import { IconButton } from "./components/TableItems/IconButton";
import { StyledBadge } from "./components/TableItems/StyledBadge";

function NextUIBenchmark() {
    const columns = [
        { name: "NAME", uid: "name" },
        { name: "ROLE", uid: "role" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const users = [
        {
            id: 1,
            name: "Tony Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            email: "tony.reichert@example.com",
        },
        {
            id: 2,
            name: "Zoey Lang",
            role: "Technical Lead",
            team: "Development",
            status: "paused",
            age: "25",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            email: "zoey.lang@example.com",
        },
        {
            id: 3,
            name: "Jane Fisher",
            role: "Senior Developer",
            team: "Development",
            status: "active",
            age: "22",
            avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            email: "jane.fisher@example.com",
        },
        {
            id: 4,
            name: "William Howard",
            role: "Community Manager",
            team: "Marketing",
            status: "vacation",
            age: "28",
            avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
            email: "william.howard@example.com",
        },
        {
            id: 5,
            name: "Kristen Copper",
            role: "Sales Manager",
            team: "Sales",
            status: "active",
            age: "24",
            avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
            email: "kristen.cooper@example.com",
        },
    ];

    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                        <Row>
                            <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                                {user.team}
                            </Text>
                        </Row>
                    </Col>
                );
            case "status":
                return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => console.log("View user", user.id)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit user">
                                <IconButton onClick={() => console.log("Edit user", user.id)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() => console.log("Delete user", user.id)}
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };

    const ExampleCard = () => {
        return (<Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
                <img
                    alt="nextui logo"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width="34px"
                    height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                        <Text h4 css={{ lineHeight: "$xs" }}>
                            Next UI
                        </Text>
                    </Grid>
                    <Grid xs={12}>
                        <Text css={{ color: "$accents8" }}>nextui.org</Text>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
                <Text>
                    Make beautiful websites regardless of your design experience.
                </Text>
            </Card.Body>
            <Card.Footer>
                <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="https://github.com/nextui-org/nextui"
                >
                    Visit source code on GitHub.
                </Link>
            </Card.Footer>
        </Card>)
    }

    const collator = useCollator({ numeric: true });
    async function sort({ items, sortDescriptor }) {
        return {
            items: items.sort((a, b) => {
                let first = a[sortDescriptor.column];
                let second = b[sortDescriptor.column];
                let cmp = collator.compare(first, second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }),
        };
    }
    const list = useAsyncList({ sort });

    return (
        <div>
            <Grid.Container gap={4} justify="center">
                <Grid xs={4}><ExampleCard></ExampleCard></Grid>
                <Grid xs={4}><ExampleCard></ExampleCard></Grid>
                <Grid xs={4}><ExampleCard></ExampleCard></Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify="center">
                <Table
                    aria-label="Example table with custom cells"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                    selectionMode="none"
                    sortDescriptor={list.sortDescriptor}
                    onSortChange={list.sort}
                >
                    <Table.Header columns={columns}>
                        {(column) => (
                            <Table.Column
                                key={column.uid}
                                hideHeader={column.uid === "actions"}
                                align={column.uid === "actions" ? "center" : "start"}
                                allowsSorting
                                width={300}
                            >
                                {column.name}
                            </Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={users}>
                        {(item) => (
                            <Table.Row>
                                {(columnKey) => (
                                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                )}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Grid.Container>
        </div>


    )
}

export default NextUIBenchmark