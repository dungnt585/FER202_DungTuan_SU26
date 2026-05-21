// Tạo function component MyProfile
// Hiển thị ID, name, email, Link github, avatar của bạn
import React from 'react';

function MyProfile({ profile }) {
    return (
        <div className="profile-card">
            <img className="profile-avatar" src={profile.avatarSrc} alt={profile.name} />
            <div className="profile-body">
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-id">ID: {profile.id}</p>
                <p className="profile-email">Email: {profile.email}</p>
                <p className="profile-github">GitHub: <a href={profile.githubLink} target="_blank" rel="noopener noreferrer">{profile.githubLink}</a></p>
            </div>
        </div>
    );
}

export default MyProfile;