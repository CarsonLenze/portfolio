import { SiGithub, SiInstagram, SiDiscord, SiTwitter } from "react-icons/si";
import { styled, Spacer, Button, Text, Link, Grid } from "@nextui-org/react";
// import Typist from "react-typist";

const Layout = styled("div", {
    minHeight: '91vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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
        <div id="home" style={{ background: 'radial-gradient(circle at 10% 10%,rgba(245,164,227,.4) 10%,transparent 10.2%),radial-gradient(circle at 10% 10%,#fff 10%,transparent 10.2%),radial-gradient(circle at 90% 85%,rgba(94,226,255,.4) 20%,transparent 20.2%),radial-gradient(circle at 90% 85%,#fff 20%,transparent 20.2%),linear-gradient(200deg,#5ee2ff,#f5a4e3 60%)' }}>
            <Layout>
                <Text size="calc(1.625rem + 4.5vw)" weight="light" color="#fff">Carson Lenze</Text>
                <Text size="$xl" weight="light" color="#fff"> | Programmer | Student | Maker | Hacker | Developer </Text>
                <Spacer y={1} />
                <Grid.Container gap={2} justify="center" css={{ color: '$primaryLight' }}>
                    <Spacer y={0.5} />
                    <StyledIcon Icon={<SiGithub size={40} />} href='https://github.com/carsonlenze/'/>
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
                    <Button size="lg" color="default" flat css={{ zIndex: 'unset' }}>More about me</Button>
                </Link>
            </Layout>
        </div>
    )
}