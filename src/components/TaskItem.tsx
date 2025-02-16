import { Task } from "../context/TaskContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

interface TaskItemProps {
	task: Task;
	toggleTask: (id: string) => void;
	handleEditClick: (task: Task) => void;
	deleteTask: (id: string) => void;
}

export default function TaskItem({ task, toggleTask, handleEditClick, deleteTask }: TaskItemProps) {
	return (
		<div key={task.id} className="w-full max-w-lg bg-gray-300 rounded-lg shadow p-4 border border-red-500">
			<h3 className="font-bold px-2 py-1 mb-2">{task.title}</h3>
			<p className="px-2 py-1 mb-2">{task.description}</p>
			<div className="flex justify-end gap-2">
				<button onClick={() => toggleTask(task.id)} className="w-10 h-10 bg-green-400 text-black rounded-lg flex items-center justify-center cursor-pointer">
					{task.completed ? "Desmarcar" : <FaCheck className="text-black" />}
				</button>
				<button onClick={() => handleEditClick(task)} className="w-10 h-10 bg-yellow-300 text-black rounded-lg flex items-center justify-center cursor-pointer">
					<FaEdit className="text-black" />
				</button>
				<button onClick={() => deleteTask(task.id)} className="w-10 h-10 bg-red-500 text-black rounded-lg flex items-center justify-center cursor-pointer">
					<FaRegTrashAlt className="text-black" />
				</button>
			</div>
		</div>
	);
}
