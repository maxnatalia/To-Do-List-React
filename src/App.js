import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Page404 from "./features/page404/Page404";

const App = () => (
    <HashRouter>
        <Redirect to="/zadania">Zadania</Redirect>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Page404 />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;