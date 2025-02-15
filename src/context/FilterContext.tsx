import { createContext, useContext, useState } from "react";

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

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
	const [filters, setFilters] = useState<FilterState>({
		status: "all",
		priority: null,
		category: null,
		searchTerm: "",
	});

	return <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>;
};

export const useFilter = () => {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
};
