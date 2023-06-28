import './style.css';

export function UserCard({ name, jobRole, children }) {
    return (
        <div className='user-card'>
            {children}
            <strong>{name}</strong>
            <span>{jobRole}</span>
            <button>Connect</button>
        </div>
    );
}