import css from './SingleShop.module.css';

function SingleShop(props) {
  const { description, imageUrl, shopName, startYear, town } = props.obj;
  return (
    <li className={css.shop}>
      <div className={css.shop__top}>
        <h2 className={css.shop__name}>{shopName}</h2>
        <img className={css.shop__img} src={imageUrl} alt={shopName} />
        <p className={css.shop__desc}>{description}</p>
      </div>

      <div className={css.shop__bottom}>
        <p className={css.shop__town}>{town}</p>
        <p className={css.shop__year}>{startYear}</p>
      </div>
    </li>
  );
}
export default SingleShop;
