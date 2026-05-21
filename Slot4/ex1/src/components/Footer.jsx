import MyProfile from './MyProfile';

function Footer(){
    const profile = {
        id: "123456",
        name: "DungNT",
        email: "ngotuandung585@gmail.com",
        githubLink: "https://github.com/dungnt585/FER202_DungTuan_SU26.git",
        avatarSrc: "./images/avatars/avatar1.jpg"
    };
    return (
        <footer>
            <MyProfile profile={profile} />
        </footer>
    );
}
export default Footer;