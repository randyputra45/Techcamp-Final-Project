import React, {useEffect, useContext, useState} from 'react'
import BlogButton from '../components/BlogButton'
import BlogCard2 from '../components/BlogCard2'
import useVideo from '../hooks/useVideo'
import useLikes from '../hooks/useLikes'
import Content from '../components/ContentArticle';
import HeartFill from '../images/heart-fill.svg'
import HeartWhite from '../images/heart-white.svg'
import { UserContext } from '../context/userContext';
import DesktopAvatar from '../components/DesktopAvatar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const ExampleVideo = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);

    const {videoID, getVideoById} = useVideo()
    const path = window.location.pathname
    let url = path.replace(/^https?:\/\//, '').split('/');
    
    useEffect(() => {
        getVideoById(path)
    }, [path])

    return (
        <div>
            <div className="block md:hidden">
                <img src={videoID && videoID.thumbnail_url} alt="" className='object-cover w-full' />
                <div className="px-4">
                    <div className="pt-6 text-xl">
                        {videoID && videoID.title}
                    </div>
                    <div className="pt-4 flex justify-between">
                        <div className="text-gray-500 text-xs">
                            Description
                        </div>
                        <div className="text-gray-500 text-xs">
                            {videoID && videoID.decs}
                        </div>
                    </div>
                    <div className="flex botbar pb-4 pr-4 gap-x-3">
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                {/* HEAD */}
                <div className="bg-active-button mt-20">
                    <div className="grid grid-cols-4">
                        <div className="flex pl-8 md:pr-12 lg:px-12 xl:px-12 2xl:px-20">
                            <div className="flex items-end pb-8">
                                <div className="text-2xl xl:text-4xl font-semibold text-white">
                                    {videoID && videoID.title}
                                    {/* "Merasa Kesepian? Kenali Penyebab Sulit Memiliki Teman" */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 md:h-[300px] lg:h-[500px]">
                            <iframe 
                                className="h-full w-full md:h-128" 
                                title="myFrame"
                                allowFullScreen="allowFullScreen"
                                frameBorder="0"
                                src={videoID && videoID.video_url}>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-x-8">
                    <div>   
                        {/* ADJUST WIDTH */}
                        <div className="mt-8 px-8 lg:px-16 xl:px-36 2xl:px-36">

                            {/* CONTENT */}
                            <div className="py-6 gap-x-0 lg:gap-x-6">

                                {/* OTHER VIDEOS */}
                                <div className="text-md leading-relaxed text-justify">
                                    <div className="hidden md:block">
                                        <p className="text-md font-bold">Description</p>
                                        <p className="text-md pt-2">{videoID && videoID.desc}</p>
                                    </div>
                                    <div className="pt-2 md:pt-10 font-bold">
                                        Other Videos
                                    </div>
                                    <div className="pt-3 flex gap-x-4">
                                        <BlogCard2
                                            url="/videos/6432f396120b39e6b87fab5c"
                                            title="Belajar Kebiasaan Baru dengan Berhenti Belajar (Cara Menghilangkan Kebiasaan Buruk)"
                                            pic="https://img.youtube.com/vi/L7TUgGWr_44/maxresdefault.jpg"
                                        />
                                        <BlogCard2
                                            url="/videos/6432f42c120b39e6b87fab66"
                                            title="Cara Biar Kamu Nggak Takut Dewasa (Overthinking Masa Dewasa & Quarter Life-Crisis"
                                            pic="https://img.youtube.com/vi/l4zLrhS6haQ/maxresdefault.jpg"
                                        />
                                        <BlogCard2
                                            url="/videos/6432f4af120b39e6b87fab68"
                                            title="Sakit Hati Ditinggal Pas Lagi Sayang-Sayangnya (Cara Move On dari Putus Hubungan & Patah Hati)"
                                            pic="https://img.youtube.com/vi/y580OtrfGvQ/maxresdefault.jpg"
                                        />
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

export default ExampleVideo
