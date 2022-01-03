import React from 'react'
import BlogCard from '../components/BlogCard'
import MobileButton from '../components/MobileButton'
import NotifButton from '../components/NotifButton'

const ProfileBlog = () => {
    return (
        <div>
            <div className="pt-24 pb-6 px-8">
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="text-sm mb-1">Akun</div>
                        <div className="text-2xl font-bold">Blog</div>
                    </div>
                    <NotifButton />
                </div>
                <div className="pt-8">
                    <div className="font-bold text-sm pb-3">Blog yang disukai</div>
                    <div className="flex flex-col gap-y-3">
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                        <BlogCard 
                            pic="exampleblog.png"
                            title="Dampak overthinking bisa berakibat fatal"
                            desc="Terdapat masalah dengan Rumah Tanggamu? Bingung untuk mencari solusi bersama pasangan? Konsultasikan masalahmu bersama psikolog kami."
                        />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ProfileBlog
