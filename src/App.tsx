import { useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { FilterProvider } from "./context/FilterContext";
import Modal from "./components/Modal";

export default function App() {
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<FilterProvider>
			<div className="min-h-screen text-black flex flex-col items-center p-4">
				<h1 className="text-3xl font-bold mb-4">TODO - CHALLENGE ✅</h1>

				<button onClick={() => setIsFormOpen(!isFormOpen)} className="w-34 h-10 bg-blue-500 text-lg text-white rounded absolute bottom-5 right-5 cursor-pointer hover:bg-blue-700">
					{isFormOpen ? "Cerrar Formulario" : "Agregar Tarea"}
				</button>

				{/* {isFormOpen && <TaskForm closeForm={() => setIsFormOpen(false)} />} */}

				<TaskList />
				{/* Modal para el formulario */}
				<Modal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)}>
					<TaskForm closeForm={() => setIsFormOpen(false)} />
				</Modal>
			</div>
		</FilterProvider>
	);
}
