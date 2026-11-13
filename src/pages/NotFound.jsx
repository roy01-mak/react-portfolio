import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>That address doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;