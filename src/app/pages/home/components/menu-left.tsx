//pages
import Favorites from '../components-menu-sidebar/favorites'
import Home from '../components-menu-sidebar/home'
import Profile from '../components-menu-sidebar/profile'
import Search from '../components-menu-sidebar/search'
import Settings from '../components-menu-sidebar/settings'
import Create_Post from '../components-menu-sidebar/create-posts'

//shadcn
import { Separator } from '@/components/ui/separator'

const Menu_Left = () => {

    return (
        <aside className="fixed top-[92px] left-5 bottom-5 w-80 bg-white dark:bg-gray-800 rounded-xl p-6 overflow-y-hidden scrollbar-none">
            <h2 className="text-lg font-medium mb-4">Settings</h2>
            <Separator />
            <div className="space-y-7 my-4">
                <Home />
                <Profile />
                <Search />
                <Favorites />
                <Create_Post />
            </div>

            <Separator />

            <div className='mt-[140px]' >
                <Separator />
                <div className="pt-6">
                    <Settings />
                </div>
            </div>
        </aside>
    )
}

export default Menu_Left