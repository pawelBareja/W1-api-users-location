import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import Users from "./components/Users";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_url = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetch(api_url)
      .then((result) => result.json())
      .then((result) => {
        setTimeout(() => {
          setUsers(result.results);
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      <Router>
        <Link to="/">Głowna</Link>

        <Switch>
          <Route path="/" exact>
            <ReactPlaceholder rows={10} ready={!loading}>
              <Users users={users} />
            </ReactPlaceholder>
            <Users users={users} />
          </Route>
          {/* spytac dlaczego tak jest ? */}
          <Route
            path="/user/:id"
            render={(props) => <User {...props} users={users} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
