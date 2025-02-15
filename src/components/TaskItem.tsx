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
		<div key={task.id} className="bg-gray-300 rounded-lg shadow">
			<h3 className="font-bold">{task.title}</h3>
			<p>{task.description}</p>
			<div className="flex justify-end gap-2">
				<button onClick={() => toggleTask(task.id)} className="w-10 h-10 bg-green-400 text-white rounded-lg flex items-center justify-center cursor-pointer">
					{task.completed ? "Desmarcar" : <FaCheck className="text-black" />}
				</button>
				<button onClick={() => handleEditClick(task)} className="w-10 h-10 bg-yellow-300 text-white rounded-lg flex items-center justify-center cursor-pointer">
					<FaEdit className="text-black" />
				</button>
				<button onClick={() => deleteTask(task.id)} className="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center cursor-pointer">
					<FaRegTrashAlt className="text-black" />
				</button>
			</div>
		</div>
	);
}
