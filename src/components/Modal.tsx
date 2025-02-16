import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-white bg-transparent-80">
			<div className="bg-gray-50 p-6 rounded-lg shadow-lg relative">
				<button onClick={onClose} className="absolute top-2 right-2 text-white text-lg cursor-pointer">
					{/* ✖ */}
					<IoClose className="text-red-600 text-3xl" />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById("modal-root") as HTMLElement
	);
}
