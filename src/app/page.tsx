import {
	BoltIcon,
	ExclamationTriangleIcon,
	SunIcon,
} from "@heroicons/react/24/outline";

function Homepage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen px-2 text-white">
			<h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

			<div>
				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						{/* Sun Icon */}
						<SunIcon className="h-8 w-8 " />
						<h2>Examples</h2>
					</div>

					<div className="space-y-2">
						<p className="infoText">"Explain Something to Me"</p>
						<p className="infoText">
							"What is the difference between and dog and a cat?"
						</p>
						<p className="infoText">"What is the colour of the sun?"</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						{/* Sun Icon */}
						<BoltIcon className="h-8 w-8 " />
						<h2>Examples</h2>
					</div>

					<div className="space-y-2">
						<p className="infoText">"Explain Something to Me"</p>
						<p className="infoText">
							"What is the difference between and dog and a cat?"
						</p>
						<p className="infoText">"What is the colour of the sun?"</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						{/* Sun Icon */}
						<ExclamationTriangleIcon className="h-8 w-8 " />
						<h2>Examples</h2>
					</div>

					<div className="space-y-2">
						<p className="infoText">"Explain Something to Me"</p>
						<p className="infoText">
							"What is the difference between and dog and a cat?"
						</p>
						<p className="infoText">"What is the colour of the sun?"</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Homepage;
