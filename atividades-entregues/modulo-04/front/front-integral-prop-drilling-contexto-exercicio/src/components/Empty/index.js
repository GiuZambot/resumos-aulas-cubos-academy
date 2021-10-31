import './styles.css';

function Empty({ icon, message, iconSize }) {
  return (
    <div className="container-empty">
      <img
        src={icon}
        alt="icon"
        className="icon-empty"
        style={{ width: `${iconSize}px` }}
      />
      <strong>{message}</strong>
    </div>
  );
}

export default Empty;