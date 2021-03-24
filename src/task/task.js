import Item from '../item';

const Task = ({ mainClass, heading, descr, items, columns }) => {

    const renderRow = (row, rowIdx) => {
        return (
            <li key={rowIdx} className='nkh-li'>
                <ul key={rowIdx} className='nkh-row'>
                    {
                        row.map((el, colIdx) => renderItem(el, colIdx, rowIdx))
                    }
                </ul>
            </li>
        )
    };

    const renderItem = (text, colIdx, rowIdx) => {
        return (
            <li key={`${rowIdx}_${colIdx}`} className='nkh-li'>
                <Item text={text} />
            </li>
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
            <ul className='nkh-container'>
                {
                    arr.map((row, rowIdx) => renderRow(row, rowIdx))
                }
            </ul>
        </section>
    );
}

export default Task;