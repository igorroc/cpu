import { styled } from "@stitches/react"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import send from "../assets/send.gif"
import clock from "../assets/clock.gif"

const Main = styled("main", {
	background: "#232323",
	color: "#000",
	width: "100vw",
	height: "100vh",
	display: "flex",
	gap: "50px",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",

	".modal": {
		position: "relative",
		background: "#fff",
		padding: "30px",
		paddingBottom: "60px",
		maxWidth: "400px",
		textAlign: "center",
		borderRadius: "10px",
		overflow: "hidden",
		boxShadow: `
            0.8px 2.4px 2.5px rgba(0, 0, 0, 0.031),
            1.9px 6px 6.8px rgba(0, 0, 0, 0.044),
            3.9px 12.2px 14.3px rgba(0, 0, 0, 0.056),
            8px 25.2px 30px rgba(0, 0, 0, 0.069),
            22px 69px 81px rgba(0, 0, 0, 0.1)`,

		"&>p": {
			margin: "30px 0",
		},

		".small": {
			fontSize: "0.8rem",
		},

		".bar": {
			position: "absolute",
			left: "0",
			bottom: "0",
			width: "100%",
			height: "50px",
			background: "linear-gradient(to right, #5b78be, #374872)",
		},
	},

	a: {
		color: "white",
		textDecoration: "underline",
	},
})

export default function Inscricao() {
	const [count, setCount] = useState(0)
	const frases = ["3 segundos", "2 segundos", "1 segundo", "0 segundos"]

	// useEffect(() => {
	// 	const redirect = setTimeout(() => {
	// window.location.href =
	// 	"https://www.sympla.com.br/sinform-2022__1711481"
	// 	}, 3000)
	// 	const seconds = setInterval(() => {
	// 		setCount((prev) => prev + 1)
	// 	}, 1000)
	// 	console.log(count)

	// 	return () => {
	// 		clearTimeout(redirect)
	// 		clearInterval(seconds)
	// 	}
	// }, [])

	return (
		<Main>
			<div className="modal">
				<div className="img">
					<img src={clock} alt="send" />
				</div>
				<h1>Aguente firme!</h1>
				<p>
					O link para o evento vai estar disponível dia 10/09 às 20h
					{/* Você vai ser redirecionado para outra página, deve levar{" "}
					{frases[count]}. */}
				</p>
				{/* <div className="small">
					<p>Caso você não seja redirecionado, clique no link:</p>
					<a href="https://www.sympla.com.br/sinform-2022__1711481">https://www.sympla.com.br/sinform-2022__1711481</a>
				</div> */}
				<div className="bar"></div>
			</div>
			<a href="/">Voltar</a>
		</Main>
	)
}
