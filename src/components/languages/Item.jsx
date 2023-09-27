import "./styles.css";
export default function Item({ language }) {
  let itemComps = [
    <img key="lang-img" className="lang-img" src={language.photo_url} alt="" />,
  ];
  if (language.display_name) {
    itemComps.push(
      <p key="lang-title" className="lang-title">
        {language.name}
      </p>
    );
  }
  return <div className="grid-item">{itemComps}</div>;
}
