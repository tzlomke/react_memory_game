import React from "react";
import "./style.css";

function Modal(props) {
	return (
		<div className="modal-wrapper"
			style={{
				display: props.show ? 'block' : 'none',
		}}>

			<div className="modal-header">
				<span className="close-modal-btn" onClick={props.close}>X</span>
			</div>

			<div className="modal-body">
				<div>
					<h2 className="modal-content">{props.modalContent}</h2>
					<img className="modal-image" src={props.imgSrc} alt={props.imgAlt}></img>
				</div>
			</div>

			<div className="modal-footer">
			</div>

		</div>
	);
}

export default Modal;