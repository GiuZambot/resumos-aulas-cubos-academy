import AddIcon from '../../assets/add-icon.svg';
import RemoveIcon from '../../assets/remove-icon.svg';
import './styles.css';

export default function BtnFiltros({ title, selected, handleSelectFilter }) {
  return (
    <div
      className={`container-chip ${selected && 'selected'}`}
      onClick={() => handleSelectFilter(title)}
    >
      <span>{title}</span>
      <img className="icon-filter" src={selected ? RemoveIcon : AddIcon} alt={title} />
    </div >
  )
}