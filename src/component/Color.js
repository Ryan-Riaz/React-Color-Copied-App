import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Color = () => {
	const [colorValues] = useState([
		"#F44336",
		"#E91E63",
		"#9C27B0",
		"#673AB7",
		" #3F51B5",
		"#2196F3",
		"#03A9F4",
		"#00BCD4",
		"#009688",
		"#4CAF50",
		"#8BC34A",
		"#CDDC39",
		"#FFEB3B",
		"#FFC107",
		"#FF9800",
		"#FF5722",
	]);
	const copyColor = (e) => {
		let color = e.target.textContent;
		if (navigator.clipboard) {
			navigator.clipboard.writeText(color);
			navigator.clipboard.readText();
			toast.info(`Yahoo! you've copied ${color} on the Clipboard!!!`);
		}
	};
	return (
		<div className="row">
			{colorValues.map((color) => (
				<div
					className="item"
					key={color}
					style={{ background: color }}
					onClick={copyColor}
				>
					<div>{color}</div>
				</div>
			))}
		</div>
	);
};
export default Color;
