import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg relative">
				<button onClick={onClose} className="absolute top-2 right-2 text-white text-lg">
					✖
				</button>
				{children}
			</div>
		</div>,
		document.getElementById("modal-root") as HTMLElement
	);
}
