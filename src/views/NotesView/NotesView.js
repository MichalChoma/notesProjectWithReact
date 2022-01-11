import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const NotesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.note} />
        )}
    </AppContext.Consumer>
)

export default NotesView;