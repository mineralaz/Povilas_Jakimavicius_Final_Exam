function SingleShop(props) {
  const { description, imageUrl, shopName, startYear, town } = props.obj;
  return (
    <li>
      <img src={imageUrl} alt={shopName} />
      <h2>{shopName}</h2>
      <p>{description}</p>
      <p>{town}</p>
      <p>Since {startYear}</p>
    </li>
  );
}
export default SingleShop;
