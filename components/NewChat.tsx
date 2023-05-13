import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
	return (
		<div className="border-gray-700 border chatRow items-center justify-center">
			<PlusIcon className="h-4 w-4" />
			<p className="">New Chat</p>
		</div>
	);
}

export default NewChat;
