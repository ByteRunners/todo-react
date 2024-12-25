import "./buttonStyles.css";

export default function Button({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
}
