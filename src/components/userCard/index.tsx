import React from "react";
import styles from './UserCard.module.css'

interface UserCardProps {
    avatarUrl: string;
    username: string;
    followers: number;
    userId: string;
}

const UserCard: React.FC<UserCardProps> = ({ avatarUrl, username, followers, userId }) => (
    <div className={styles.userCard}>
        <img src={avatarUrl} alt={`${username}'s avatar`} />
        <div className={styles.userInfo}>
            <h3>{username}</h3>
            <h5>Id: {userId}</h5>
            <p>Followers: {followers}</p>
        </div>
    </div>
);

export default UserCard;
