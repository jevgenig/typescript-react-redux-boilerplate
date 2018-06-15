import * as React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { createStore } from "redux";

function entry(): void {
    const targetNode = document.querySelector(`[data-role=react-root]`);
    const store = createStore(s => s);

    render(
        <Provider store={store}>
            <div>STATE: {JSON.stringify(store.getState())}</div>
        </Provider>,
        targetNode,
    )
}

entry();
