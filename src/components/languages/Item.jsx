import "./styles.css";
export default function Item({ language }) {
  return <li className="grid-item">{language.name}</li>;
}
