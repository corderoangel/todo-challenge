// import { useTask, Task } from "../context/TaskContext";
// import { useFilter } from "../context/FilterContext";
// import { useState } from "react";
// import TaskForm from "./TaskForm";
// import Modal from "./Modal";

// export default function TaskList() {
// 	const { tasks, deleteTask, toggleTask } = useTask();
// 	const { filters, setFilters } = useFilter();
// 	const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
// 	const [isModalOpen, setIsModalOpen] = useState(false);

// 	const filteredTasks = tasks.filter((task) => {
// 		if (filters.status !== "all" && (filters.status === "completed") !== task.completed) return false;
// 		if (filters.priority && task.priority !== filters.priority) return false;
// 		if (filters.category && task.category !== filters.category) return false;
// 		if (filters.searchTerm && !task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !task.description.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
// 		return true;
// 	});

// 	// Función para abrir el modal con la tarea seleccionada
// 	const handleEditClick = (task: Task) => {
// 		setTaskToEdit(task);
// 		setIsModalOpen(true);
// 	};

// 	return (
// 		<div className="w-full max-w-md">
// 			{taskToEdit && <TaskForm closeForm={() => setTaskToEdit(null)} taskToEdit={taskToEdit} />}

// 			<div className="mb-4">
// 				<input type="text" placeholder="Buscar..." value={filters.searchTerm} onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })} className="w-full p-2 rounded mb-2" />
// 				<select value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value as "all" | "completed" | "pending" })} className="w-full p-2 rounded mb-2">
// 					<option value="all">Todas</option>
// 					<option value="completed">Completadas</option>
// 					<option value="pending">Pendientes</option>
// 				</select>
// 				<select
// 					value={filters.priority || ""}
// 					onChange={(e) => setFilters({ ...filters, priority: (e.target.value as "high" | "medium" | "low") || null })}
// 					className="w-full p-2 rounded mb-2">
// 					<option value="">Todas las prioridades</option>
// 					<option value="high">Alta</option>
// 					<option value="medium">Media</option>
// 					<option value="low">Baja</option>
// 				</select>
// 				<select
// 					value={filters.category || ""}
// 					onChange={(e) => setFilters({ ...filters, category: (e.target.value as "work" | "personal" | "study") || null })}
// 					className="w-full p-2 rounded mb-2">
// 					<option value="">Todas las categorías</option>
// 					<option value="work">Trabajo</option>
// 					<option value="personal">Personal</option>
// 					<option value="study">Estudio</option>
// 				</select>
// 			</div>

// 			{filteredTasks.map((task) => (
// 				<div key={task.id} className="bg-gray-700 p-3 mb-2 rounded">
// 					<h3 className="font-bold">{task.title}</h3>
// 					<p>{task.description}</p>
// 					<button onClick={() => toggleTask(task.id)} className="bg-green-500 text-white px-4 py-2 rounded">
// 						{task.completed ? "Desmarcar" : "Completar"}
// 					</button>
// 					<button onClick={() => handleEditClick(task)} className="mr-2 bg-yellow-500 text-white p-1 rounded">
// 						Editar
// 					</button>
// 					<button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">
// 						Eliminar
// 					</button>
// 				</div>
// 			))}

// 			{/* Modal para editar tareas */}
// 			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
// 				{taskToEdit && <TaskForm closeForm={() => setIsModalOpen(false)} taskToEdit={taskToEdit} />}
// 			</Modal>
// 		</div>
// 	);
// }

import { useTask, Task } from "../context/TaskContext";
import { useFilter } from "../context/FilterContext";
import { useState } from "react";
import TaskForm from "./TaskForm";
import Modal from "./Modal";
import SearchBar from "./SearchBar"; // Nuevo componente
import TaskItem from "./TaskItem"; // Nuevo componente

export default function TaskList() {
	const { tasks, deleteTask, toggleTask } = useTask();
	const { filters, setFilters } = useFilter();
	const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Filtrar tareas según los filtros aplicados
	const filteredTasks = tasks.filter((task) => {
		if (filters.status !== "all" && (filters.status === "completed") !== task.completed) return false;
		if (filters.priority && task.priority !== filters.priority) return false;
		if (filters.category && task.category !== filters.category) return false;
		if (filters.searchTerm && !task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !task.description.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
		return true;
	});

	// Función para abrir el modal con la tarea seleccionada
	const handleEditClick = (task: Task) => {
		setTaskToEdit(task);
		setIsModalOpen(true);
	};

	return (
		<div className="w-full max-w-md">
			{/* Barra de búsqueda y filtros */}
			<SearchBar filters={filters} setFilters={setFilters} />

			{/* Lista de tareas */}
			{filteredTasks.map((task) => (
				<TaskItem key={task.id} task={task} toggleTask={toggleTask} handleEditClick={handleEditClick} deleteTask={deleteTask} />
			))}

			{/* Modal para editar tareas */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				{taskToEdit && <TaskForm closeForm={() => setIsModalOpen(false)} taskToEdit={taskToEdit} />}
			</Modal>
		</div>
	);
}
