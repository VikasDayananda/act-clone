import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './main'
import Parent from './parent'
import Child from './child'
const App = () => (
    <Router>
        <div>
            <Route path="/" exact component={Parent} />
            <Route path="/child/" component={Child} />

        </div>
    </Router>
);

export default App;
