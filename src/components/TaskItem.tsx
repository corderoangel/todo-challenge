import { useContext } from "react";
import { TaskContext, Task } from "../context/TaskContext";

interface Props {
	task: Task;
}

export default function TaskItem({ task }: Props) {
	const { toggleTask, deleteTask } = useContext(TaskContext)!;

	return (
		<div className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white">
			<h2 className="text-xl font-bold">{task.title}</h2>
			<p>{task.description}</p>
			<p>Prioridad: {task.priority}</p>
			<button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded">
				{task.completed ? "Desmarcar" : "Completar"}
			</button>
			<button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
				Eliminar
			</button>
		</div>
	);
}
