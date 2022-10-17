
import React, {  useState, useEffect } from 'react'
import './App.css';

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { FETCH_API_TIMEOUT, MEME_LIST_API } from './config/contants';
import Gallery from './component/Gallery';
import ScrollToTop from './component/ScrollToTop';
import { getRndInteger } from './utilities';

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
		}, [FETCH_API_TIMEOUT])
	}

	const getRandomMeme = async () => {
		setMessage(null);
		setIsLoading(true);
		try {
			const res = await (await fetch(MEME_LIST_API)).json();
			if (res.success) {
				const index = getRndInteger(0, res.data.memes.length);
				setMemeList([res.data.memes[index]])
			}
			else {
				setMessage("Có lỗi đã xảy ra, vui lòng thử lại sau")
			}
		} catch (error) {
			setMessage("Có lỗi đã xảy ra, vui lòng thử lại sau")
		}
		setTimeout(()=>{
			setIsLoading(false);
		},[FETCH_API_TIMEOUT])
	}

	useEffect(() => {
		getMemeList();
	}, [])

	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			<Box
				sx={{
					fontSize: "2rem",
					textAlign:"center",
					fontWeight: "bold",
				}}
			>
				Meme List
			</Box>
			<Stack
				spacing={2}
				justifyContent="center"
				alignItems="center"
				direction="row"
				sx={{
					marginTop: "1rem",
				}}
			>
				<Button
					variant='contained'
					onClick={getMemeList}
				>Tải lại</Button>
				<Button
					variant='contained'
					onClick={getRandomMeme}
				>Tạo ngẫu nhiên một Meme</Button>
			</Stack>
			<Box
				sx={{
					padding: 2,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Gallery message={message} isLoading={isLoading} images={memeList}></Gallery>
				
			</Box>
			<ScrollToTop></ScrollToTop>
		</Box>
	)
}

export default App