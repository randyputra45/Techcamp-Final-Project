import React, {useContext} from 'react'
import BlogCard from '../components/BlogCard'
import NotifButton from '../components/NotifButton'
import { UserContext } from '../context/userContext';
import DesktopAvatar from '../components/DesktopAvatar'

const ProfileBlog = () => {
    const { user, isLoading } = useContext(UserContext);
    console.log(user)
    return (
        <div>
            <div className="topbar w-full">
                <DesktopAvatar />
            </div>
            <div className="pt-24 pb-6 pl-24">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Akun</div>
                        <div className="text-2xl font-bold">Blog</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="font-bold text-sm pb-3">Blog yang disukai</div>
                    <div className="flex flex-wrap gap-4">
                        {user && user.liked_blog.map((blog) => (
                            <BlogCard
                                pic={blog.image}
                                title={blog.title}
                                url={`/blogs/${blog._id}`}
                            />
                        ))}
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProfileBlog
