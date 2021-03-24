import Item from '../item';
import './task7.css';

const Task7 = ({ mainClass, heading, descr, items, columns }) => {

    const renderRow = (row, rowIdx) => {
        return (
            <tr key={rowIdx} >
                {
                    row.map((el, colIdx) => renderItem(el, colIdx, rowIdx))
                }
            </tr>
        )
    };

    const renderItem = (text, colIdx, rowIdx) => {
        return (
            <td key={`${rowIdx}_${colIdx}`} >
                <Item text={text} />
            </td>
        );
    };

    const arr = [];
    let row;
    for (let i = 0; i < items; i++) {
        if (i % columns === 0) {
            arr.push([]);
            row = Math.floor(i / columns);
        };
        arr[row].push(`Item ${i + 1}`);
    };

    return (
        <section className={mainClass}>
            <h2>{heading}</h2>
            <p>{descr}</p>
            <table>
                <tbody>
                    {
                        arr.map((row, rowIdx) => renderRow(row, rowIdx))
                    }
                </tbody>
            </table>
        </section>
    );
}

export default Task7;