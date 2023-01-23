import { SiGithub, SiInstagram, SiDiscord, SiTwitter } from 'react-icons/si';
import { styled, Text, Spacer, Grid, Link, Button } from '@nextui-org/react';
import Typist from 'react-typist';

const Layout = styled("div", {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: "$backgroundGradient",
    minHeight: '91vh',
    width: '100%',
});

function StyledIcon({ Icon, href, props }) {
    return (
        <Link target="_blank" href={href} css={{ transition: 'transform .2s', color: 'inherit', '&:hover': { transform: 'translateY(-2px)' }, ...props }}>
            {Icon}
        </Link>
    )
}

export function Hero() {
    return (
        <Layout id="home">
            <Text size="calc(1.625rem + 4.5vw)" weight="light" color="#fff">Carson Lenze</Text>
            <Text size="$xl" weight="light" color="#fff">
                <Typist> | Programmer | Student | Maker | Hacker | Developer </Typist>
            </Text>
            <Spacer y={1} />
            <Grid.Container gap={2} justify="center" css={{ color: 'white' }}>
                <Spacer y={0.5} />
                <StyledIcon Icon={<SiGithub size={40} />} href='https://github.com/carsonlenze/' />
                <Spacer y={0.5} />
                <StyledIcon Icon={<SiInstagram size={40} />} href='https://www.instagram.com/carsonlenze/' />
                <Spacer y={0.5} />
                <StyledIcon Icon={<SiDiscord size={40} />} href='https://discordapp.com/users/404336524491227149/' />
                <Spacer y={0.5} />
                <StyledIcon Icon={<SiTwitter size={40} />} href='https://www.twitter.com/carsonlenze/' />
                <Spacer y={0.5} />
            </Grid.Container>
            <Spacer y={1} />
            <Link href="#about">
                <Button size="lg" css={{ zIndex: 'unset' }} flat>More about me</Button>
            </Link>
        </Layout>
    )
}