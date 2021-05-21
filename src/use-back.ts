import * as ReactRouterDOM from "react-router-dom";


const {useNavigate, useLocation} = ReactRouterDOM; // Not a native ESM named import :(

/**
 * React Router DOM hook for navigating back without leaving your website
 * @param {string} [defaultPath="/"] Fallback path to navigate to for when there is not a previous history entry
 */
export const useBack = (defaultPath = "/"): {
	hasBack: boolean,
	handleBack: () => void,
} => {
	const navigate = useNavigate();
	const location = useLocation();
	const hasBack = location.key !== "default";

	const handleBack = () => {
		if (hasBack) {
			navigate(-1);
		} else {
			navigate(defaultPath);
		}
	};

	return {hasBack, handleBack};
};
