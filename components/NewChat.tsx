import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {

	const createNewChat = asytnc() => {
		
	}
	return (
		<div
			onClick={createNewChat}
			className="border-gray-700 border chatRow items-center justify-center">
			<PlusIcon className="h-4 w-4" />
			<p className="">New Chat</p>
		</div>
	);
}

export default NewChat;
