import { useTask, Task } from "../context/TaskContext";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskList() {
	const { tasks, deleteTask, toggleTask } = useTask();
	const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

	return (
		<div className="w-full max-w-md">
			{taskToEdit && <TaskForm closeForm={() => setTaskToEdit(null)} taskToEdit={taskToEdit} />}

			{tasks.map((task) => (
				<div key={task.id} className="bg-gray-700 p-3 mb-2 rounded">
					<h3 className="font-bold">{task.title}</h3>
					<p>{task.description}</p>
					<button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded">
						{task.completed ? "Desmarcar" : "Completar"}
					</button>
					<button onClick={() => setTaskToEdit(task)} className="mr-2 bg-yellow-500 text-white p-1 rounded">
						Editar
					</button>
					<button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">
						Eliminar
					</button>
				</div>
			))}
		</div>
	);
}
