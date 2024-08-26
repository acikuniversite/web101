import { useState } from "react"

const NotGirme = ({ gonder }) => {
    const [note, setNote] = useState('')


    const gonderHandle = () => {
        gonder(note)
        setNote('')
    }
    return (
        <div className="not-girme-bolumu">
            <input type="text" id="notgir" value={note} onChange={(e) => setNote(e.target.value)} />
            <button id="gonder" onClick={gonderHandle}>Gönder</button>
        </div>
    )
}

export default NotGirme