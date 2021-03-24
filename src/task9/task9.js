import { useState } from 'react';
import './task9.css';

const data = [
    {
        item: 'Item 1',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus molestie venenatis. Fusce vitae consequat lectus, et rutrum tortor. Praesent tempus ex ligula, in maximus sem ornare non. Aliquam ac nibh et diam aliquam eleifend. Quisque porttitor eget purus ac sagittis. Nam vitae eros et leo vestibulum tempor tempus ac ex. Aenean sed lorem placerat justo finibus volutpat non in eros. Ut quis odio nibh. Nullam aliquet eleifend nulla vel pulvinar. Morbi euismod quam nec ante placerat, ut semper purus rutrum. Proin tristique consequat posuere. Praesent maximus nisl est, ut condimentum eros ultricies id.'
    },
    {
        item: 'Item 2',
        descr: 'Praesent a urna et augue aliquam sodales. Ut fermentum mi eget elit convallis, vel tempus arcu feugiat. Nam finibus cursus augue. Donec feugiat sed ligula et lacinia. Duis nec purus porttitor, vehicula est sed, pharetra justo. Nam sagittis, ante ut suscipit elementum, lorem felis venenatis magna, ut pellentesque tellus erat vel turpis. Duis pharetra efficitur odio, id pretium elit tincidunt hendrerit. Integer pretium mauris in enim blandit ultrices. Nam condimentum eros sit amet erat tempus, at rhoncus nibh luctus. In hac habitasse platea dictumst. Mauris lobortis consequat lacinia.'
    },
    {
        item: 'Item 3',
        descr: 'Nunc quis erat sapien. Ut leo erat, dictum vel dolor ac, porta tristique arcu. Suspendisse vitae risus cursus, scelerisque orci et, volutpat eros. Aenean sed velit ut lorem pulvinar molestie auctor quis elit. Praesent efficitur diam ac augue scelerisque, in mollis urna lacinia. Ut laoreet sapien eget nisl tristique sodales. Suspendisse dictum ipsum fermentum nisi vulputate scelerisque. Mauris mattis vitae magna venenatis consectetur.'
    }
];

const Task9 = ({ mainClass, heading, descr }) => {

    const [isOpen, setIsOpen] = useState([false, false, false]);

    const onButtonClick = (idx) => {
        setIsOpen((prev) => [...prev.slice(0, idx), !prev[idx], ...prev.slice(idx + 1)]);
    }

    const renderItem = ({ item, descr }, idx) => {
        const display = isOpen[idx] ? 'block' : 'none';
        const icon = isOpen[idx] ? '▼' : '►';
        return (
            <li key={idx}>
                <button 
                    onClick={() => onButtonClick(idx)}>
                    {icon} {item}
                </button>
                <p style={{ display }}>{descr}</p>
                <hr/>
            </li>
        )
    }

    return (
        <section className={mainClass}>
            <h2>{heading}</h2>
            <p>{descr}</p>
            <ul>
                {
                    data.map((el, idx) => renderItem(el, idx))
                }
            </ul>
        </section>
    )
}

export default Task9;