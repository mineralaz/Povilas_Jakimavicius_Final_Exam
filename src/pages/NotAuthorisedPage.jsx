import { Link } from 'react-router-dom';

function NotAuthorisedPage(props) {
  return (
    <div>
      <h2>For registered or logged in users only</h2>
      <p>
        Register <Link to="/register">Here</Link>
      </p>
      <p>
        Login <Link to="/login">Here</Link>
      </p>
    </div>
  );
}
export default NotAuthorisedPage;
