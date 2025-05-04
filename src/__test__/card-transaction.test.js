import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardTransaction from "../components/card-transaction";

// Helper function to render the component with English props
const renderComponent = () => {
    return render(
        <CardTransaction
            variant="transference"
            date="29-02-2010 12:34"
            senderName="Sender"
            senderEmail="sender's email"
            receptorName="Recipient"
            receptorEmail="recipient's email"
            amount="230"
            balance="10240"
        />
    );
};

// First test: Logs the render function (not very useful on its own)
test("renders content", () => {
    console.log(renderComponent);
});

// Second test: Verifies that English words appear in the component
test("words appear", () => {
    const component = renderComponent();

    // Verifying presence of various English labels and values
    component.getByText("Transference");     // Type of transaction
    component.getByText("Balance:");         // Balance label
    component.getByText("Sender:");          // Sender label
    component.getByText("Recipient:");       // Recipient label
    component.getByText("29-02-2010 12:34"); // Date
    component.getByText("10240 $");          // Balance amount

    // Prints the rendered DOM tree to console for debugging
    component.debug();
});
