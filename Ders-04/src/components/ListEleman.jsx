const ListEleman = ({ note, setNotlar }) => {
    const { id, note: text, isChecked } = note;

    const checked = () => {
        setNotlar(prev => prev.map(not => {
            if (not.id == id) {
                not.isChecked = !not.isChecked
            }
            return not;
        }))
    }

    const sil = () => {
        setNotlar(prev => prev.filter(not => not.id !== id))
    }


    return (
        <li className={`liste-eleman ${isChecked && 'checked'}`} id={id} onClick={checked}>
            <span>{text}</span>
            <button className="sil" onClick={sil}>×</button>
        </li>
    )
}

export default ListEleman