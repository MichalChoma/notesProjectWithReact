import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <ListWrapper items={context.article} />
        )}
    </AppContext.Consumer>
)

export default ArticlesView;