import { styled, Spacer, Grid, Image, Text, Button, Link } from "@nextui-org/react";

export function About() {
    const Layout = styled("div", {
        display: 'flex',
        textAlign: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@sm': {
            width: '50%',
        }
    });

    const Container = styled("div", {
        width: '346px',
        display: 'none',
        '@sm': {
            display: 'block',
            marginRight: '4rem'
        }
    });

    return (
        <div id="about" style={{ padding: '5rem 4rem', background: '#e9ecef', minHeight: '50vh' }}>
            <Grid.Container gap={2} justify="center" css={{ '@sm': { flexWrap: 'nowrap' } }}>

                <Container>
                    <Image width={346} height={346} src="https://carsons.site/me.png" css={{ borderRadius: '50%', border: '1px solid #6c757d', objectFit: 'cover' }} />
                </Container>
                <Layout>
                    <Text size="calc(1.475rem + 2.7vw)" weight="light">About Me</Text>
                    <Spacer y={2} />
                    <Text size="$xl" weight="light" css={{ textAlign: 'center' }}>My name is Carson Lenze. I'm a junior in high school and I'm planning on getting a degree in Computer Science at Purdue University. From very early on in my life, I loved computers and technology. This has helped me develop a very good technological mindset, and given me the curiosity to learn more. In my free time, I like working on discord bots and building websites just like this one.</Text>
                    <Link target="_blank" href="https://docs.google.com/document/d/1Bcx0xo2BbQHloT45BF9hGjLc5R6W71rOSJbbeuv_gqM/view">
                        <Button color="default" flat css={{ marginTop: '30px' }}>Resume</Button>
                    </Link>
                </Layout>
            </Grid.Container>
        </div>
    )
}