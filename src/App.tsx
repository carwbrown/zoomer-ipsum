import { useState } from "react";
import { zoomerism } from "./zoomerism";
import "./App.css";

const App = () => {
	const [genaratedIpsum, setGeneratedIpsum] = useState<string | null>(null);

	const paragraphLength = 6;
	const sentenceLength = 5;

	const generateSentence = (capitilze = true) => {
		return Array(sentenceLength)
			.fill(0)
			.reduce((accumulator, _currentValue, index) => {
				if (index === 0 && capitilze) {
					const word = zoomerism[Math.floor(Math.random() * zoomerism.length)];
					const capitalizedStr = word.charAt(0).toUpperCase() + word.slice(1);
					return `${accumulator} ${capitalizedStr}`;
				}

				return `${accumulator} ${zoomerism[Math.floor(Math.random() * zoomerism.length)]}`;
			}, "");
	};

	const handleGenerateClick = () => {
		Math.floor(Math.random() * zoomerism.length);
		let paragraph = "";

		let counter = 0;

		let capitilizeSentence = true;

		while (counter < paragraphLength) {
			const randNum = Math.random();

			if (randNum < 0.2) {
				paragraph = `${paragraph} ${generateSentence(capitilizeSentence)},`;
				capitilizeSentence = false;
			} else {
				paragraph = `${paragraph} ${generateSentence(capitilizeSentence)}.`;
				capitilizeSentence = true;
				counter++;
			}
		}
		setGeneratedIpsum(paragraph);
	};

	const handleCopyIpsum = () => {
		if (genaratedIpsum) {
			navigator.clipboard.writeText(genaratedIpsum.trim());
		}
	};

	return (
		<div className="content" data-theme="cupcake">
			<title>Zoomer Ipsum</title>
			<article className="prose prose-lg">
				<h1 className="mb-2">Generate some ipsum brah</h1>
				<p className="mb-2">Impress your zoomer coworkers with some 🔥 ipsum</p>
				<button
					type="button"
					className="btn btn-primary mb-3"
					onClick={handleGenerateClick}
				>
					Generate ipsum
				</button>
			</article>
			{genaratedIpsum ? (
				<div className="flex w-screen justify-center">
					<div className="card bg-base-200 text-base-content card-xl max-w-lg">
						<div className="card-body">
							<p className="text-left">{genaratedIpsum}</p>
							<button
								type="button"
								className="btn btn-soft btn-info mt-2"
								onClick={handleCopyIpsum}
							>
								Copy to clipboard
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default App;
