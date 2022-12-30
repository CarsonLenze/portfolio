import { styled, Spacer, Text, Link, Grid } from "@nextui-org/react";
import { SiInstagram, SiDiscord, SiTwitter } from "react-icons/si";

const Background = styled("div", {
    padding: '2.5rem 1.5rem',
    background: '#e9ecef',
    '@sm': {
        padding: '5rem'
    }
});

function StyledIcon({ Icon, href, props }) {
    return (
        <Link target="_blank" href={href} css={{ transition: 'transform .2s', color: 'inherit', '&:hover': { transform: 'translateY(-2px)' }, ...props }}>
            {Icon}
        </Link>
    )
}

export function Footer() {
    return (
        <Background>
            <div style={{ height: '0.125rem', backgroundColor: 'black', width: '100%' }} />
            <Grid.Container gap={2} justify="space-between" css={{ marginTop: '2rem' }}>
                <Text>© Carson Lenze. All Rights Reserved.</Text>
                <Grid css={{ display: 'flex' }}>
                    <Spacer y={0.5} />
                    <StyledIcon Icon={<SiInstagram size={40} />} href='https://www.instagram.com/carsonlenze/' />
                    <Spacer y={0.5} />
                    <StyledIcon Icon={<SiDiscord size={40} />} href='https://discordapp.com/users/404336524491227149/' />
                    <Spacer y={0.5} />
                    <StyledIcon Icon={<SiTwitter size={40} />} href='https://www.twitter.com/carsonlenze/' />
                    <Spacer y={0.5} />
                </Grid>
            </Grid.Container>
        </Background>
    )
}