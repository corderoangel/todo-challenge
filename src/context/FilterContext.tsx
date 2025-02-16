import { createContext, useContext, useState, useEffect } from "react";

export interface FilterState {
	status: "all" | "completed" | "pending";
	priority: "high" | "medium" | "low" | null;
	category: "work" | "personal" | "study" | null;
	searchTerm: string;
}

interface FilterContextType {
	filters: FilterState;
	setFilters: (filters: FilterState) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const defaultFilters: FilterState = {
	status: "all",
	priority: null,
	category: null,
	searchTerm: "",
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
	// Cargar filtros desde localStorage o usar valores por defecto
	const [filters, setFilters] = useState<FilterState>(() => {
		const savedFilters = localStorage.getItem("filters");
		return savedFilters ? JSON.parse(savedFilters) : defaultFilters;
	});

	// Guardar filtros en localStorage cada vez que cambian
	useEffect(() => {
		localStorage.setItem("filters", JSON.stringify(filters));
	}, [filters]);

	return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
};
