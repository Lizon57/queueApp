import { PeopleSetting } from "../cmps/user-setting/people-setting/people-setting"
import { SideBar } from "../cmps/user-setting/side-bar"

export function UserSetting() {
    return (
        <main className="user-setting-container">
            <SideBar />
            <PeopleSetting />
        </main>
    )
}