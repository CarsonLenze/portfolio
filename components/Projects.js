import { styled, Spacer, Text, Grid, Card, Button, Row } from "@nextui-org/react";
import { SP } from "next/dist/shared/lib/utils";
import { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai';
//AiFillStar

const Box = styled("div", {
    display: 'flex',
    justifyContent: 'center',
    padding: '5rem 4rem',
    alignItems: 'center',
    flexDirection: 'column'
})

const GridRow = styled("div", {
    display: 'flex',
    flexWrap: 'wrap',
    'boxSizing': 'border-box'
})

function ProjectCard({ data }) {
    if (!data) return 'test'
    if (!data.languages) return 'no'

    let updated = ''
    const date = new Date(data.updated);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
        updated = `${hours.toString()} hours ago`
    } else {
        const day = date.getDate();
        const year = date.getFullYear();
        updated = `on ${date.toLocaleString('default', { month: 'long' })} ${day}, ${year}`
    }

    return (
        //xs={12}
        <Grid ss={12} md={6} css={{ '@ss': { width: '10000rem' }, display: 'flex !important', jc: 'center', fb: '50%' }}>
            <Card isHoverable css={{ mw: "400px", flexShrink: '0', width: '100%', margin: '0.5rem' }}>
                <Card.Body css={{ padding: '1.25rem' }}>
                    <Row justify="space-between">
                        <Text size="$xl" weight="medium" h5>{data.name}</Text>
                        <Button size="sm" disabled auto icon={<AiFillStar color="#e3b341" />} css={{ mw: '30px' }}>
                            <Text b>{data.stars}</Text><Spacer x={0.2} />Stars</Button>
                    </Row>
                    <Text>{data.description}</Text>
                    <Spacer y={0.2} />

                </Card.Body>
                <Card.Divider />
                <Card.Body css={{ padding: '1.25rem' }}>
                    <Text css={{ display: 'flex', alignItems: 'center' }}>Languages: {' '}
                        {Object.keys(data.languages).map(x =>
                            <Text size="$xs" weight="bold" css={{ background: '#f8f9fa', color: '#212529', marginLeft: '0.5rem', borderRadius: '0.25rem' }}>{`${x}: ${data.languages[x]}%`}</Text>
                        )}
                    </Text>
                    <Text size="$xs" weight="bold">{`Updated ${updated}`}</Text>
                </Card.Body>
            </Card>
        </Grid>
    )
}

export function Projects() {
    const [data, setData] = useState(['loading', 'loading', 'loading', 'loading']);

    useEffect(() => {
        fetch('https://api.github.com/users/carsonlenze/starred')
            .then((res) => res.json())
            .then(async (repos) => {
                let repositories = [];
                repos = repos.slice(0, 4);
                console.log(repos)
                for (const repo of repos) {
                    const languages = await fetch(repo.languages_url)
                        .then(res => res.json());

                    const total = Object.values(languages).reduce((x, y) => x + y, 0);
                    for (const key in languages) languages[key] = Math.trunc((languages[key] / total) * 1000) / 10

                    repositories.push({ id: repo.id, name: repo.name, description: repo.description, url: repo.html_url, clone: repo.clone_url, forks: repo.forks_count, stars: repo.stargazers_count, updated: repo.pushed_at, languages });
                }
                setData(repositories);
            })
    }, []);

    return (
        <div id="projects">
            <Box>
                <Text size="calc(1.475rem + 2.7vw)" weight="light">My Projects</Text>
                <Spacer y={2} />
                <Grid.Container gap={2} justify="right" css={{ alignItems: 'right' }}>
                    <GridRow>
                        {data.map(repo => <ProjectCard data={repo} />)}
                    </GridRow>
                </Grid.Container>
            </Box>
        </div>
    )
}