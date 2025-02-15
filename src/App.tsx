import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
			<h1 className="text-3xl font-bold mb-4">Lista de Tareas ✅</h1>

			<button onClick={() => setIsFormOpen(!isFormOpen)} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
				{isFormOpen ? "Cerrar Formulario" : "Agregar Tarea"}
			</button>

			{isFormOpen && <TaskForm closeForm={() => setIsFormOpen(false)} />}

			<TaskList />
		</div>
	);
}
