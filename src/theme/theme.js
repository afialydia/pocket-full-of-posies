import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
	sm: "30em",
	md: "40em",
	lg: "70em",
	xl: "80em",
	"2xl": "96em",
});

// let vh = window.innerHeight * 0.01
// document.documentElement.style.setProperty("--vh", `${vh}px`)

const styles = {
	global: (props) => ({
		html: {
			h: "100vh",
			fontSize: "16px",
			scrollBehavior: "smooth",
		},
		body: {
			// color: mode("#44324c", "#f0f0ee")(props),
			background: "rgb(221,225,218)",
			minH: "100%",
			w: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			padding: "0",
			margin: "0",
			boxSizing: "border-box",
			scrollBehavior: "smooth",
		},
	}),
};


const fonts = {
	heading: "Ilyas",
	body: "Dosis-Regular",
	// body: "Dosis-Regular",
};

const theme = extendTheme({
	styles,
	fonts,
	breakpoints,
});

export default theme;

// 4a4a4a