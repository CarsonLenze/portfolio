import { Button, Input, Textarea, Text, Card, styled, Grid, Spacer, Loading } from "@nextui-org/react";
import { useCallback, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import confetti from "canvas-confetti";

export function Contact() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const buttonRef = useRef(null);

    const handleConfetti = () => {
        const { clientWidth, clientHeight } = document.documentElement;
        const boundingBox = buttonRef.current?.getBoundingClientRect?.();

        const targetY = boundingBox?.y ?? 0;
        const targetX = boundingBox?.x ?? 0;
        const targetWidth = boundingBox?.width ?? 0;

        const targetCenterX = targetX + targetWidth / 2;

        confetti({
            zIndex: 9999,
            particleCount: 100,
            spread: 70,
            origin: {
                y: targetY / clientHeight,
                x: targetCenterX / clientWidth,
            },
        });
    };


    const onSubmit = useCallback(async (data) => {
        setLoading(true);
        data.name = `${data.name.first} ${data.name.last}`;
        const response = await fetch(`/api/contact`, { body: JSON.stringify(data), method: 'POST', headers: { "Content-Type": "application/json" } })
            .then(res => res.json())
            .catch(console.trace);

        console.log(response)
        setLoading(false);
        if (response.accepted.length) {
            handleConfetti();
            reset();
        }
    }, []);

    const firstName = register('name.first', {
        required: "Please enter a valid name",
        pattern: {
            value: /^[A-Za-z-]*$/,
            message: "Please use letters and dashes (-)"
        },
        maxLength: {
            value: 16,
            message: "Too long (max 16 characters)"
        }
    });

    const lastName = register('name.last', {
        required: "Please enter a valid name",
        pattern: {
            value: /^[A-Za-z-]*$/,
            message: "Please use letters and dashes (-)"
        },
        maxLength: {
            value: 16,
            message: "Too long (max 16 characters)"
        }
    });

    const email = register('email', {
        required: "Please enter a valid email address",
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter a valid email address"
        }
    });

    const message = register('message', {
        required: "Please enter message",
        maxLength: {
            value: 4000,
            message: "Too long (max 4000 characters)"
        }
    });

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ padding: '5rem 4rem', margin: 'auto', display: 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto' }}>
            <Text size="5rem" weight="bold" css={{ position: 'absolute', marginTop: '-6.3rem', width: '100%' }}>Contact</Text>
            <Card css={{ $$cardColor: '$colors$primary', maxW: '60rem' }}>
                <Card.Body>
                    <Grid.Container gap={2} justify="space-between">
                        <Grid xs={12} sm={4}>
                        <Text>
                            <Text color="white" weight="semibold" size="1.5rem">Get in touch, let‘s talk.</Text>
                            <Text color="white">Fill in the details and I‘ll get back to you as soon as I can.</Text>
                            </Text>
                        </Grid>
                        <Grid xs={12} sm={4} css={{ maxW: 'unset !important' }}>
                            <Card css={{ $$cardColor: '#fff', minWidth: '400px' }}>
                                <Card.Body>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Text>Your Name</Text>
                                        <Grid.Container gap={2} justify="center" css={{ flexWrap: 'unset' }}>
                                            <Input
                                                width="100%"
                                                clearable
                                                placeholder="First name"
                                                aria-label="name.first"
                                                {...firstName}
                                                status={errors.name?.first ? 'error' : 'default'}
                                                helperColor={errors.name?.first ? 'error' : 'success'}
                                                helperText={errors.name?.first ? errors.name.first.message : ''}
                                            />
                                            <Spacer x={1} />
                                            <Input
                                                width="100%"
                                                clearable
                                                placeholder="Last name"
                                                aria-label="name.last"
                                                {...lastName}
                                                status={errors.name?.last ? 'error' : 'default'}
                                                helperColor={errors.name?.last ? 'error' : 'success'}
                                                helperText={errors.name?.last ? errors.name.last.message : ''}
                                            />
                                        </Grid.Container>
                                        <Spacer y={errors.name?.first ? 0.7 : 0.2} />
                                        <Text>Email</Text>
                                        <Input
                                            width="100%"
                                            clearable
                                            placeholder="Email"
                                            aria-label="email"
                                            {...email}
                                            status={errors.email ? 'error' : 'default'}
                                            helperColor={errors.email ? 'error' : 'success'}
                                            helperText={errors.email ? errors.email.message : ''}
                                        />
                                        <Spacer y={errors.email ? 0.7 : 0.2} />
                                        <Text>Message</Text>
                                        <Textarea
                                            width="100%"
                                            placeholder="Message"
                                            aria-label="message"
                                            {...message}
                                            status={errors.message ? 'error' : 'default'}
                                        />

                                        {errors.message ? <Text color="error" css={{ margin: 'var(--nextui-space-1) 0 0 var(--nextui-space-5)', fontSize: 'var(--nextui-space-5)' }}>{errors.message.message}</Text> : ''}
                                        <Spacer y={errors.message ? 1.1 : 2} />
                                        <Grid.Container gap={2} justify="right">
                                            <Button disabled={loading} ref={buttonRef} type="submit" flat>{loading ? <Loading color="currentColor" size="sm" /> : 'Submit'}</Button>
                                        </Grid.Container>
                                    </form>
                                </Card.Body>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
            </Card>
            </div>
            // </div>
    )
}