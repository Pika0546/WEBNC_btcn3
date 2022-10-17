import React, { useMemo } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import { SKELETON_AMOUNT } from '../config/contants';

const Gallery = ({ images, isLoading, message }) => {

    const skeletonArray = useMemo(()=>{
        return Array.from(Array(SKELETON_AMOUNT).keys()).map((item, index)=>{
            return <Skeleton key={index} animation="wave" variant="rounded" width={200} height={180} />
        })
    },[])

    return (
        <Paper
            variant="outlined"
            sx={{
                width: "80%",
            }}
        >
            <ImageList
                sx={{
                    padding: "1rem",
                }}
                cols={4} gap={12}
            >
                {(isLoading) ? skeletonArray : (
                    <>
                        {images.map((item) => (
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
                        ))}
                    </>
                )
                }

            </ImageList >
        </Paper>
    )
}

export default Gallery