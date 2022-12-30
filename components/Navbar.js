import { Navbar, Spacer, Text, Link } from "@nextui-org/react";

export function Header() {
    return (
        <Navbar variant="sticky" css={{ jc: 'unset' }}>
            <Navbar.Brand href="#">
                <Link color="inherit" href="#home">
                    <Text color="inherit" size="$xl">
                        {'<Carson />'}
                    </Text>
                </Link>
            </Navbar.Brand>
            <Spacer x={1} />
            <Navbar.Content
                enableCursorHighlight
                activeColor="primary"
                hideIn="xs"
                variant="underline"
                css={{ marginRight: 'auto' }}
            >
                <Navbar.Link href="#about">About</Navbar.Link>
                <Navbar.Link href="#projects">Projects</Navbar.Link>
                <Navbar.Link href="#contact">Contact</Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}