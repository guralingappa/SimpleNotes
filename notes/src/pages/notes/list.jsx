
export default function NotesList() {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return (
        <table>
            <tbody>
                {
                    notes.map((item, i) =>
                    (
                        <tr key={i}>
                            <td>{item.Name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}