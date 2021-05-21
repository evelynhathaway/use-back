import {fireEvent, render, waitFor} from "@testing-library/react";
import {BrowserRouter, useLocation} from "react-router-dom";
import {useBack} from "..";


describe("use back", () => {
	test("should toggle going back", async () => {
		const UseBackTester = () => {
			const {hasBack, handleBack} = useBack("/home");
			const {pathname} = useLocation();
			return (
				<>
					<span>You are at {pathname}</span>
					<button type="button" onClick={handleBack}>
						{hasBack ? "Go Back" : "Go Home"}
					</button>
				</>
			);
		};

		const {getByText} = render(
			<BrowserRouter>
				<UseBackTester />
			</BrowserRouter>
		);
		const backButton = getByText("Go Home");
		await waitFor(() => getByText("You are at /"));
		fireEvent.click(backButton);
		await waitFor(() => getByText("You are at /home"));
		expect(backButton.textContent).toEqual("Go Back");
		fireEvent.click(backButton);
		await waitFor(() => getByText("You are at /"));
		expect(backButton.textContent).toEqual("Go Home");
	});

	test("should default to the root location", async () => {
		const UseBackTester = () => {
			const {hasBack, handleBack} = useBack();
			const {pathname} = useLocation();
			return (
				<>
					<span>You are at {pathname}</span>
					<button type="button" onClick={handleBack}>
						{hasBack ? "Go Back" : "Go Home"}
					</button>
				</>
			);
		};

		const {getByText} = render(
			<BrowserRouter>
				<UseBackTester />
			</BrowserRouter>
		);
		const backButton = getByText("Go Home");
		await waitFor(() => getByText("You are at /"));
		fireEvent.click(backButton);
		await waitFor(() => getByText("You are at /"));
	});
});
