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
		<div className="w-full max-w-lg p-4">
			{/* Barra de búsqueda y filtros */}
			<SearchBar filters={filters} setFilters={setFilters} />

			{/* Lista de tareas */}
			<div className="space-y-4 mt-4">
				{filteredTasks.map((task) => (
					<TaskItem key={task.id} task={task} toggleTask={toggleTask} handleEditClick={handleEditClick} deleteTask={deleteTask} />
				))}
			</div>

			{/* Modal para editar tareas */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				{taskToEdit && <TaskForm closeForm={() => setIsModalOpen(false)} taskToEdit={taskToEdit} />}
			</Modal>
		</div>
	);
}
