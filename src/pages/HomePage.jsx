import PageTitle from '../components/UI/PageTitle';

function HomePage(props) {
  return (
    <div className="container">
      <PageTitle>Welcome to our sponsored shops</PageTitle>
      <h3>
        To see all our sponsored shops or to add your own to our list, please
        login if you are existing user, if not then you can become one by
        registering{' '}
      </h3>
    </div>
  );
}
export default HomePage;
