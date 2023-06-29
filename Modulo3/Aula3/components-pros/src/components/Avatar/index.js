import './style.css';

export function Avatar({ avatar }) {
    return (
        <div
            className='avatar-img'
            style={{ backgroundImage: `url(${avatar})` }} />
    );
}