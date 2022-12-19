import { Link } from 'react-router-dom';
import PageTitle from '../components/UI/PageTitle';

function NotAuthorisedPage(props) {
  return (
    <div className="container">
      <PageTitle>For registered or logged in users only</PageTitle>
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
