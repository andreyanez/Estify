import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export const Breadcrumb = () => {
	const navigate = useNavigate();
	return (
		<div className="breadcrumb">
			<button onClick={() => navigate(-1)}>
				<Icon icon="ri-arrow-drop-left-line" />
				Volver
			</button>
		</div>
	);
};
