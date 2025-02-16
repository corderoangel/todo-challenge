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
		<div key={task.id} className="w-full max-w-lg bg-gray-200 rounded-lg shadow p-4">
			<h3 className="font-bold px-2 py-1 mb-2">{task.title}</h3>
			<p className="px-2 py-1 mb-2 break-words">{task.description}</p>
			{/* Nueva sección: prioridad, categoría y fecha */}
			<div className="p-2 text-sm text-gray-700">
				<p>
					<strong>Priority:</strong> {task.priority}
				</p>
				<p>
					<strong>Category:</strong> {task.category}
				</p>
				<p>
					<strong>Date:</strong> {task.createdAt}
				</p>
			</div>
			<div className="flex justify-end gap-2">
				<button
					onClick={() => toggleTask(task.id)}
					disabled={task.completed}
					className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer ${task.completed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-700"}`}>
					<FaCheck className="text-black" />
				</button>
				<button
					onClick={() => handleEditClick(task)}
					disabled={task.completed}
					className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer ${task.completed ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-300 hover:bg-yellow-500"}`}>
					<FaEdit className="text-black" />
				</button>
				<button onClick={() => deleteTask(task.id)} className="w-10 h-10 bg-red-500 hover:bg-red-700 text-black rounded-lg flex items-center justify-center cursor-pointer">
					<FaRegTrashAlt className="text-black" />
				</button>
			</div>
		</div>
	);
}
