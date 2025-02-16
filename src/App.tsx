import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { FilterProvider } from "./context/FilterContext";
import Modal from "./components/Modal";

export default function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);

	// const tasks = Array.from({ length: 10 }, (_, i) => ({
	// 	id: crypto.randomUUID(),
	// 	title: `Task ${i + 1}`,
	// 	description: `Description of task ${i + 1}`,
	// 	completed: false, // Todas las tareas están sin completar
	// 	priority: ["high", "medium", "low"][Math.floor(Math.random() * 3)],
	// 	category: ["work", "personal", "study"][Math.floor(Math.random() * 3)],
	// }));

	// localStorage.setItem("tasks", JSON.stringify(tasks));

	// console.log("10 tasks saved in localStorage:", tasks);

	return (
		<FilterProvider>
			<div className="min-h-screen text-black flex flex-col items-center p-4">
				<h1 className="text-3xl font-bold mb-4">TODO - CHALLENGE ✅</h1>

				<button onClick={() => setIsFormOpen(!isFormOpen)} className="w-34 h-10 bg-blue-500 text-lg text-white rounded fixed bottom-5 right-5 cursor-pointer hover:bg-blue-700">
					{isFormOpen ? "Cerrar Formulario" : "Crear tarea"}
				</button>

				{/* {isFormOpen && <TaskForm closeForm={() => setIsFormOpen(false)} />} */}

				<TaskList />
				<Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
					<TaskForm closeForm={() => setIsFormOpen(false)} />
				</Modal>
			</div>
		</FilterProvider>
	);
}
