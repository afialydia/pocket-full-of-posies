import React, { useState, useEffect, useRef } from "react";
import {
	Button,
	Flex,
	useToast,
	FormControl,
	Center,
	Alert,
	Stack,
	VisuallyHidden,
} from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import FormInput from "../form-input";

const ContactForm = () => {
	const initialState = {
		name: "",
		email: "",
		subject: "",
		message: "",
	};

	const messageSent = useToast();

	const [form, setForm] = useState(initialState);

	const { name, email, subject, message } = form;

	const [submitted, setSubmitted] = useState(false);

	const [buttonText, setButtonText] = useState("SEND");

	const [token, setToken] = useState(null);

	const captchaRef = useRef(null);

	const onExpire = () => {
		console.log("hCaptcha Token Expired");
	};

	const onError = (err) => {
		console.log(`hCaptcha Error: ${err}`);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	// 	await captchaRef.current.execute();
    }

	// useEffect(() => {
	// 	async () => {
	// 		if (token) {
	// 			console.log("now here");
	// 			const res = await fetch("/api/sendgrid", {
	// 				body: JSON.stringify({
	// 					email: email,
	// 					fullname: name,
	// 					subject: subject,
	// 					message: message,
	// 				}),
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				method: "POST",
	// 			});
	// 			const { error } = await res.json();
	// 			if (error) {
	// 				console.log(error);
	// 				return;
	// 			}

	// 			if (res.status === 200) {
	// 				setSubmitted(true);
	// 				setButtonText("MESSAGE SENT!");
	// 				setForm(initialState);
	// 				messageSent({
	// 					title: "Message Sent.",
	// 					description: "Thanks for reaching out. I'll get back to you soon.",
	// 					status: "info",
	// 					position: "bottom-right",
	// 					duration: 9000,
	// 					isClosable: true,
	// 				});
	// 			} else {
	// 				setButtonText("Something Went Wrong");
	// 			}
	// 		} else {
	// 			return <Alert status="success">Something went wrong!</Alert>;
	// 		}
	// 	},
	// 		[token];
	// })}

	const handleChange = (e) => {
		const { value, name } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<Stack width="100%" margin="auto" minH={"100%"} border="solid" background="huntergreen" >
			<form
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
				}}
				onSubmit={handleSubmit}
			>
				<Flex
					p={0}
					direction="column"
					flex={1}
					align={"space-evenly"}
					justify={"space-between"}
				>
					<Stack
						spacing={4}
						w={"full"}
						maxW={"md"}
						h="100%"
						justify="space-evenly"
					>
						<FormControl marginTop="2%" id="name">
							<VisuallyHidden>Full Name</VisuallyHidden>
							<FormInput
								name="name"
								value={name}
								type="text"
								placeholder="full name"
								handleChange={handleChange}
								submitted={submitted}
							/>
						</FormControl>
						<FormControl id="email">
							<VisuallyHidden>Email Address</VisuallyHidden>
							<FormInput
								name="email"
								value={email}
								type="email"
								placeholder="email address"
								handleChange={handleChange}
								submitted={submitted}
							/>
						</FormControl>{" "}
						<FormControl id="subject">
							<VisuallyHidden>Subject</VisuallyHidden>
							<FormInput
								name="subject"
								value={subject}
								type="text"
								placeholder="subject"
								handleChange={handleChange}
								submitted={submitted}
							/>
						</FormControl>
						<FormControl id="message">
							<VisuallyHidden>Message</VisuallyHidden>
							<FormInput
								name="message"
								value={message}
								type="text"
								placeholder="message"
								handleChange={handleChange}
								submitted={submitted}
							/>
						</FormControl>
						<Stack>
							<Center>
								<HCaptcha
									sitekey="4b245e78-0aaa-4f2d-a58e-61d032f0b4eb"
									size="invisible"
									onVerify={setToken}
									onError={onError}
									onExpire={onExpire}
									ref={captchaRef}
								/>
							</Center>
							<Button
								type="submit"
								color="whitesmoke"
								_hover={{ color: "#44324c", background: "whitesmoke" }}
								borderRadius="none"
								variant={"outline"}
								isDisabled={submitted}
							>
								{buttonText}{" "}
							</Button>
						</Stack>
					</Stack>
				</Flex>
			</form>
		</Stack>
	);
};
export default ContactForm;
