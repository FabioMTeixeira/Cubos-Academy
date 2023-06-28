import './style.css';

export function Avatar({ avatar }) {
    return (
        <img
            className='avatar-img'
            src={avatar}
            alt='Profile Img' />
    );
}