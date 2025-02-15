import { useState, useEffect } from "react";
import { Task } from "../context/TaskContext";
import { useTask } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

interface TaskFormProps {
	closeForm: () => void;
	taskToEdit?: Task | null;
}

export default function TaskForm({ closeForm, taskToEdit }: TaskFormProps) {
	const { addTask, updateTask } = useTask();

	const [task, setTask] = useState<Task>({
		id: uuidv4(),
		title: "",
		description: "",
		dueDate: new Date().toISOString().split("T")[0], // Formato YYYY-MM-DD
		priority: "medium",
		category: "personal",
		completed: false,
		createdAt: new Date().toISOString(),
	});

	useEffect(() => {
		if (taskToEdit) {
			setTask(taskToEdit);
		}
	}, [taskToEdit]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (taskToEdit) {
			updateTask(task.id, task);
		} else {
			addTask(task);
		}
		closeForm();
	};

	return (
		<form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg">
			<input type="text" placeholder="Título" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} className="w-full p-2 rounded mb-2" required />
			<textarea placeholder="Descripción" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} className="w-full p-2 rounded mb-2" required />
			<input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} className="w-full p-2 rounded mb-2" required />
			<select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value as "high" | "medium" | "low" })} className="w-full p-2 rounded mb-2">
				<option value="high">Alta</option>
				<option value="medium">Media</option>
				<option value="low">Baja</option>
			</select>
			<select value={task.category} onChange={(e) => setTask({ ...task, category: e.target.value as "work" | "personal" | "study" })} className="w-full p-2 rounded mb-2">
				<option value="work">Trabajo</option>
				<option value="personal">Personal</option>
				<option value="study">Estudio</option>
			</select>
			<button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
				{taskToEdit ? "Actualizar Tarea" : "Agregar Tarea"}
			</button>
		</form>
	);
}
