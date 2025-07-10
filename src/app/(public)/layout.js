import "@styles/globals.css";

export const metadata = {
	title: "",
	description: "",
};

export default function layout({ children }) {
	return (
		<html>
			<body className="antialiased">
                {children}
			</body>
		</html>
	);
}
	