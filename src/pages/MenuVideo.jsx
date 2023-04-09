import React, {useState, useEffect} from 'react'
import VideoCard from '../components/VideoCard'
import DesktopAvatar from '../components/DesktopAvatar'
import KategoriBlog from '../components/KategoriBlog'
import MobileNavbar from '../components/MobileNavbar'
import useVideo from '../hooks/useVideo'

const MenuBlog = () => {
    const {videoContent} = useVideo()

    return (
        <div>
            <div className="">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="md:px-8 pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Blogs</div>
                                </div>
                                <div className="pt-4 pb-2">
                                    <div className="font-bold text-sm pb-3">Hasil</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {videoContent && videoContent.map((art) => (
                                            <VideoCard
                                            url={`/videos/${art._id}`}
                                            key={art._id}
                                            title={art.title}
                                            pic={art.thumbnail_url}
                                            />
                                        ))}
                                            {/* <VideoCard
                                            url="/videos/6432dacb0e5f096c7a1479d4"
                                            key="6432dacb0e5f096c7a1479d4"
                                            title="Cara Keluar dari Toxic Relationship: Filosofi Hidup Minimalis"
                                            // pic={art.image}
                                            pic="https://img.youtube.com/vi/vA8z3CHyBpg/sddefault.jpg"
                                            /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBlog