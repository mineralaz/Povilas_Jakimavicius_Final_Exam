function SingleShop(props) {
  const { description, imageUrl, shopName, startYear, town } = props.obj;
  return (
    <li>
      <img src={imageUrl} alt={shopName} />
      <h2>{shopName}</h2>
      <h3>{town}</h3>
      <p>{description}</p>
      <p>{startYear}</p>
    </li>
  );
}
export default SingleShop;
