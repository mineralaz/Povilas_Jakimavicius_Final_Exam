import css from './SingleShop.module.css';

function SingleShop(props) {
  const { description, imageUrl, shopName, startYear, town } = props.obj;
  return (
    <li className={css.shop}>
      <img className={css.shop__img} src={imageUrl} alt={shopName} />
      <h2 className={css.shop__name}>{shopName}</h2>
      <p className={css.shop__desc}>{description}</p>
      <p className={css.shop__town}>{town}</p>
      <p className={css.shop__year}>Since {startYear}</p>
    </li>
  );
}
export default SingleShop;
