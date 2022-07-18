function OfferItems(props: {items: string[] | []}): JSX.Element {
  return (
    <ul className="property__inside-list"> {
      props.items.map((item) => (
        <li className="property__inside-item" key={item}>{item}</li>
      ))
    }
    </ul>
  );
}

export default OfferItems;
