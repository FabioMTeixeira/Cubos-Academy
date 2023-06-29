import './style.css';

export function UserCard({ name, jobRole, children, following }) {
    return (
        <div className='user-card'>
            {children}
            <strong>{name}</strong>
            <span>{jobRole}</span>
            {
                <button
                    className={`${following ? 'following' : 'unfollowing'}`}
                >
                    {following ? 'Connected' : 'Connect'}
                </button>
            }

        </div>
    );
}