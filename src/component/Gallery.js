import React, { useMemo } from 'react'
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { SKELETON_AMOUNT } from '../config/contants';

const Gallery = ({ images, isLoading, message }) => {

    const skeletonArray = useMemo(() => {
        return Array.from(Array(SKELETON_AMOUNT).keys()).map((item, index) => {
            return (
                <Grid
                    item
                    xs={6} sm={4} md={3}
                    key={index}
                >
                     <Skeleton key={index} animation="wave" variant="rounded" height={200}/>
                </Grid>
            )
        })
    }, [])

    return (
        <Paper
            variant="outlined"
            sx={{
                width: "100%",
                padding: "1rem"
            }}
        >
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
            >
                {isLoading ? skeletonArray : (
                    <>
                        {images.map((item) => (
                            <Grid
                                item
                                key={item.id}
                                xs={6} sm={4} md={3}
                            >
                                <ImageListItem key={item.id}>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Box
                                            sx={{
                                                padding: "1rem",
                                                border: "1px solid rgba(0,0,0,0.1)",
                                                cursor: 'pointer',
                                                "&:hover": {
                                                    border: "1px solid #333"
                                                }
                                            }}
                                        >
                                            <img
                                                src={`${item.url}`}
                                                srcSet={`${item.url}`}
                                                alt={item.name}
                                                loading="lazy"
                                            />
                                        </Box>
                                    </a>
                                </ImageListItem>
                            </Grid>
                        ))}
                    </>
                )}


            </Grid>
        </Paper>
    )
}

export default Gallery