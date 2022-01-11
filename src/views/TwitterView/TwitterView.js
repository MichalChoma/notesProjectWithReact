import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const TwitterView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.twitter} />
        )}
    </AppContext.Consumer>
)

export default TwitterView;