// import { useContext } from "react";
// import { TaskContext, Task } from "../context/TaskContext";

// interface Props {
// 	task: Task;
// }

// export default function TaskItem({ task }: Props) {
// 	const { toggleTask, deleteTask } = useContext(TaskContext)!;

// 	return (
// 		<div className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white">
// 			<h2 className="text-xl font-bold">{task.title}</h2>
// 			<p>{task.description}</p>
// 			<p>Prioridad: {task.priority}</p>
// 			<button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded">
// 				{task.completed ? "Desmarcar" : "Completar"}
// 			</button>
// 			<button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
// 				Eliminar
// 			</button>
// 		</div>
// 	);
// }

import { Task } from "../context/TaskContext";

interface TaskItemProps {
	task: Task;
	toggleTask: (id: string) => void;
	handleEditClick: (task: Task) => void;
	deleteTask: (id: string) => void;
}

export default function TaskItem({ task, toggleTask, handleEditClick, deleteTask }: TaskItemProps) {
	return (
		<div key={task.id} className="bg-gray-700 p-3 mb-2 rounded">
			<h3 className="font-bold">{task.title}</h3>
			<p>{task.description}</p>
			<button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded">
				{task.completed ? "Desmarcar" : "Completar"}
			</button>
			<button onClick={() => handleEditClick(task)} className="mr-2 bg-yellow-500 text-white p-1 rounded">
				Editar
			</button>
			<button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">
				Eliminar
			</button>
		</div>
	);
}
