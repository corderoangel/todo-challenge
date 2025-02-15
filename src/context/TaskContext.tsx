import { createContext, useState, useEffect, useContext } from "react";

export interface Task {
	id: string;
	title: string;
	description: string;
	dueDate: string;
	priority: "high" | "medium" | "low";
	category: "work" | "personal" | "study";
	completed: boolean;
	createdAt: string;
}

interface TaskContextType {
	tasks: Task[];
	addTask: (task: Task) => void;
	updateTask: (id: string, updatedTask: Partial<Task>) => void;
	deleteTask: (id: string) => void;
	toggleTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>(() => {
		return JSON.parse(localStorage.getItem("tasks") || "[]");
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (task: Task) => setTasks([...tasks, task]);

	const updateTask = (id: string, updatedTask: Partial<Task>) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
	};

	const deleteTask = (id: string) => setTasks(tasks.filter((task) => task.id !== id));

	const toggleTask = (id: string) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
	};

	return <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, toggleTask }}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTask must be used within a TaskProvider");
	}
	return context;
};
