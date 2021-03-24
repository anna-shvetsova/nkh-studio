import Item from '../item';
import './task8.css';

const Task8 = ({ mainClass, heading, descr, items, columns }) => {

    const renderRow = (row, rowIdx) => {
        return (
            <div key={rowIdx} >
                {
                    row.map((el, colIdx) => renderItem(el, colIdx, rowIdx))
                }
            </div>
        )
    };

    const renderItem = (text, colIdx, rowIdx) => {
        return (
            <div key={`${rowIdx}_${colIdx}`} className={'nkh-col'}>
                <Item text={text} />
            </div>
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
            <div>
                {
                    arr.map((row, rowIdx) => renderRow(row, rowIdx))
                }
            </div>
        </section>
    );
}

export default Task8;