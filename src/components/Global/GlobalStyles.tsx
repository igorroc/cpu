import { createStitches, globalCss } from "@stitches/react"

const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		fontFamily: "Montserrat",
	},
	"@font-face": {
		fontFamily: "Montserrat",
		src: "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');",
	},

	body: {
		background: "linear-gradient(to right, #171717, #202020)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		color: "white",
		overflowX: "hidden",
		fontSize: "16px",
	},

	a: {
		textDecoration: "none",
		color: "white",
	},

	ul: {
		paddingLeft: "1em",
	},
})

export const { styled, css } = createStitches({
	media: {
		bp1: "(max-width: 640px)",
		bp2: "(max-width: 768px)",
		bp3: "(max-width: 1024px)",
	},
})

function SetGlobalStyle() {
	globalStyles()
	return <span></span>
}

export default SetGlobalStyle
