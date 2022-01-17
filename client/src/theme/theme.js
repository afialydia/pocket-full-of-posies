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


const styles = {
	global: (props) => ({
		html: {
			h: "100vh",
			fontSize: "16px",
			scrollBehavior: "smooth",
		},
		body: {
			color: "whitesmoke",
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
};

const theme = extendTheme({
	styles,
	fonts,
	breakpoints,
});

export default theme;

