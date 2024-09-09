import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const User = () => {
  const { id } = useParams<{ id: string}>();
  return <h2>User ID: {id}</h2>;
};

const RouterSampleWId = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
};

export default RouterSampleWId;