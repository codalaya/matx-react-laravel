import { Code, OpenInNew } from "@mui/icons-material";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import Container from "@/components/Container";
import MatxLayout from "@/components/MatxLayout/MatxLayout";

export default function Welcome() {
    return (
        <Container>
            <style>{`
            .welcome {
                max-width: 600px;
                margin: 1rem auto;
            }
            .welcome h1 {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
            }
            .welcome p {
                margin-bottom: 1rem;
            }
            .welcome a {
                text-decoration: underline;
                color: #0366d6;
            }
            .welcome a:hover {
                color: #0056b3;
            }
        `}</style>
            <div className="welcome">
                <h1>Welcome to Laravel</h1>

                <p>
                    This is your first Laravel project. You can start by
                    checking out the
                    <a href="https://laravel.com/docs">documentation</a>, or
                    explore the source code of this project.
                </p>
            </div>

            <Card sx={{ maxWidth: 600, margin: "1rem auto" }}>
                <CardHeader
                    title="Laravel and Material UI"
                    subheader="A powerful combination"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image="https://laravel.com/img/logomark.min.svg"
                    alt="Laravel Logo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This is a simple example of how you can use Material UI
                        with Laravel.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        startIcon={<OpenInNew />}
                        href="https://material-ui.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </Button>
                    <Button
                        startIcon={<Code />}
                        href="https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Source
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

Welcome.layout = (page) => <MatxLayout children={page} />;
