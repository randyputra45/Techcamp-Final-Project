import React, {useEffect, useContext, useState} from 'react'
import BlogButton from '../components/BlogButton'
import BlogCard2 from '../components/BlogCard2'
import useBlog from '../hooks/useBlog'
import useLikes from '../hooks/useLikes'
import Content from '../components/ContentArticle';
import HeartFill from '../images/heart-fill.svg'
import HeartWhite from '../images/heart-white.svg'
import { UserContext } from '../context/userContext';
import DesktopAvatar from '../components/DesktopAvatar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const ExampleBlog = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);

    const {blogArticleID, blogContent, isLiked, getArticleById} = useBlog()
    const [checkLike, setLike] = useState(false)
    const {likeStatus, likeBlog, unlikeBlog, checkBlogLikes} = useLikes()
    const path = window.location.pathname
    let url = path.replace(/^https?:\/\//, '').split('/');
    
    useEffect(() => {
        getArticleById(path)
        checkBlogLikes(path, url[2])
        if (likeStatus) {
            setLike(true)
        } else {
            setLike(false)
        }
    }, [path, checkLike, isLiked])

    console.log("render", likeStatus)

    const handleLike = async () => {
        console.log("click", likeStatus)
        if (likeStatus) {
            console.log("unlike")
            await unlikeBlog(blogArticleID._id, user._id)
            setLike(likeStatus)
        } else {
            console.log("like")
            await likeBlog(blogArticleID._id, user._id)
            setLike(likeStatus)
        }
    }

    return (
        <div>
            <div className="block md:hidden">
                <img src={blogArticleID && blogArticleID.image} alt="" className='object-cover w-full' />
                <div className="px-4">
                    <div className="pt-6 text-xl">
                        {blogArticleID && blogArticleID.title}
                    </div>
                    <div className="pt-4 flex justify-between">
                        <div className="text-gray-500 text-xs">
                            Salman Setiawan
                        </div>
                        <div className="text-gray-500 text-xs">
                            Kamis, 6 Mei 2021
                        </div>
                    </div>
                    <div className="pt-6 text-gray-500 text-xs leading-relaxed">
                        {blogContent && blogContent.content.map((item, i) => <Content key={i} subcontent={item.subcontent} paragraph={item.paragraph}/>)}
                    </div>
                    <div className="flex botbar pb-4 pr-4 gap-x-3">
                        <button onClick={() => history.goBack()}>
                            <BlogButton 
                                pic="white-back.svg"
                            />
                        </button>
                        <button onClick={() => handleLike()}>
                            <BlogButton
                                pic={likeStatus && likeStatus ? HeartFill : HeartWhite}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                {/* HEAD */}
                <div className="bg-active-button mt-14">
                    <div className="grid grid-cols-2">
                        <div className="flex pl-8 md:pr-12 lg:px-16 xl:px-36 2xl:px-60">
                            <div className="flex items-end pb-8">
                                <div className="text-2xl xl:text-3xl font-semibold text-white">
                                    {blogArticleID && blogArticleID.title}
                                </div>
                            </div>
                        </div>
                        <img src={blogArticleID && blogArticleID.image} alt="" className='object-cover w-full h-full' />
                    </div>
                </div>
                <div className="flex justify-center gap-x-8">
                    <div>   
                        {/* ADJUST WIDTH */}
                        <div className="px-8 lg:px-16 xl:px-36 2xl:px-60">

                            {/* CONTENT */}
                            <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-x-0 lg:gap-x-6">

                                {/* ARTICLE */}
                                <div className="col-span-2 text-sm md:text-sm lg:text-base leading-relaxed text-justify article-content pr-12">
                                    {blogContent && blogContent.content.map((item, i) => <Content key={i} subcontent={item.subcontent} paragraph={item.paragraph}/>)}
                                </div>
                                
                                {/* OTHER ARTICLE */}
                                <div className="text-md leading-relaxed text-justify">
                                    <div className="hidden md:block">
                                        <p className="text-md font-bold">Salman Setiawan</p>
                                        <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                                    </div>
                                    <div className="pt-2 md:pt-10 font-bold">
                                        Other Article
                                    </div>
                                    <div className="pt-3 flex flex-col gap-y-4">
                                        <BlogCard2
                                            url="/blogs/61de8f32cd21ab6e533f9528"
                                            title="Merasa Kesepian? Kenali Penyebab Sulit Memiliki Teman"
                                            pic="https://res.cloudinary.com/gocure/image/upload/v1641975601/chqswzf6snns2ckt0amq.jpg"
                                        />
                                        <BlogCard2
                                            url="/blogs/61de94689122ac15946cf43a"
                                            title="Gaya Hidup Konsumtif: Gimana Sih Cara Biar Gak Boros?"
                                            pic="https://res.cloudinary.com/gocure/image/upload/v1641976935/ah48bacruoy0mok5ynoi.jpg"
                                        />
                                        <BlogCard2
                                            url="blogs/61de9617d4b61b3b93aa31f5"
                                            pic="https://res.cloudinary.com/gocure/image/upload/v1641977365/dy9enjs9y5tafdeiblyd.jpg"
                                            title="Motivasi Kerja Hilang? (Cara Mengembalikan Produktivitas Kerja)"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="botbar pb-10 pr-12">
                    <button onClick={() => handleLike()}>
                        <BlogButton
                            pic={likeStatus !== null && likeStatus ? HeartFill : HeartWhite}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExampleBlog
