
import React, {  useState, useEffect } from 'react'
import './App.css';

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { MEME_LIST_API } from './config/contants';
import Gallery from './component/Gallery';

const App = () => {

	const [memeList, setMemeList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const getMemeList = async () => {
		setMessage(null);
		setIsLoading(true);
		try {
			const res = await (await fetch(MEME_LIST_API)).json();
			if (res.success) {
				setMemeList(res.data.memes);
			}
			else {
				setMessage("Có lỗi đã xảy ra, vui lòng thử lại sau")
			}
		} catch (error) {
			setMessage("Có lỗi đã xảy ra, vui lòng thử lại sau")
		}
		setTimeout(() => {
			setIsLoading(false);
		}, [1000])
	}

	useEffect(() => {
		getMemeList();
	}, [])

	return (
		<Box>
			<Typography variant="h5">
				Meme List
			</Typography>
			<Paper
				sx={{
					padding: 2,
					background: "#000",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Gallery message={message} isLoading={isLoading} images={memeList}></Gallery>
				<Button
					variant='contained'
					sx={{
						margin: "0 auto",
						marginTop: "2rem",
					}}
					onClick={getMemeList}
				>Tải lại</Button>
			</Paper>
		</Box>
	)
}

export default App