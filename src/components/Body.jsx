import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";
import SideBar from "./SideBar";

function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    );
}

export default Body;
