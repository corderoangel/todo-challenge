import { FilterState } from "../context/FilterContext";

interface SearchBarProps {
	filters: FilterState;
	setFilters: (filters: FilterState) => void;
}

export default function SearchBar({ filters, setFilters }: SearchBarProps) {
	return (
		<div className="flex flex-col gap-2">
			<input
				type="text"
				placeholder="Buscar..."
				value={filters.searchTerm}
				onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
				className="w-full rounded border-2 border-gray-300 bg-white rounded-lg text-md focus:outline-none h-10 "
			/>

			<select
				value={filters.status}
				onChange={(e) => setFilters({ ...filters, status: e.target.value as "all" | "completed" | "pending" })}
				className="w-full rounded border-2 border-gray-300 bg-white h-10 rounded-lg text-md focus:outline-none">
				<option value="all">Todas</option>
				<option value="completed">Completadas</option>
				<option value="pending">Pendientes</option>
			</select>

			<select
				value={filters.priority || ""}
				onChange={(e) => setFilters({ ...filters, priority: (e.target.value as "high" | "medium" | "low") || null })}
				className="w-full rounded border-2 border-gray-300 bg-white h-10 rounded-lg text-md focus:outline-none">
				<option value="">Todas las prioridades</option>
				<option value="high">Alta</option>
				<option value="medium">Media</option>
				<option value="low">Baja</option>
			</select>

			<select
				value={filters.category || ""}
				onChange={(e) => setFilters({ ...filters, category: (e.target.value as "work" | "personal" | "study") || null })}
				className="w-full rounded border-2 border-gray-300 bg-white h-10 rounded-lg text-md focus:outline-none">
				<option value="">Todas las categorías</option>
				<option value="work">Trabajo</option>
				<option value="personal">Personal</option>
				<option value="study">Estudio</option>
			</select>
		</div>
	);
}
