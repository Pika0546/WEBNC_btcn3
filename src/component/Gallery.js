import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Gallery = ({ images, isLoading, message }) => {
    return (
        <Paper
            variant="outlined"
        >
            <ImageList
                sx={{
                    width: "40rem",
                    height: "30rem",
                    padding: "1rem",
                }}
                cols={2} gap={12}
            >
                {(isLoading || message) ? (
                    <>
                        {message || "Đang tải..."}
                    </>
                ) : (
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