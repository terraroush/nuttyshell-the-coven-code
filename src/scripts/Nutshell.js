import { RenderLogout } from "./logout/LogoutComponent.js";
import { allTheNews } from "./News/News.js"
import { listPosts } from "./posts/PostList.js"
import { listFriends } from "./friends/FriendList.js"

export const Nutshell = (activeUser) => {
    // Render all your UI components here
    // Must convert activeUser from string to integer
    const parsedActiveUser = parseInt(activeUser)
    RenderLogout();
    allTheNews()
    listPosts(parsedActiveUser);
    listFriends(parsedActiveUser);
}