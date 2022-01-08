import React from 'react'
import BlogCard from '../components/BlogCard'
import DesktopAvatar from '../components/DesktopAvatar'
import KategoriBlog from '../components/KategoriBlog'
import MobileNavbar from '../components/MobileNavbar'

const MenuBlog = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <MobileNavbar />
                    <div className="pt-24 flex flex-col">
                        <div className="text-sm mb-1">Lainnya</div>
                        <div className="text-2xl font-bold">Blog</div>
                    </div>
                    <div className="pt-8">
                        <div className="font-bold text-sm pb-3">Kategori</div>
                        <div className="flex gap-x-3">
                            <KategoriBlog title="Semua" />
                            <KategoriBlog title="Kesehatan Mental" />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="font-bold text-sm pb-3">Hasil</div>
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
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="px-8 pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Blogs</div>
                                </div>
                                <div className="pt-2 pb-8">
                                    <div className="font-bold text-sm pb-4">Kategori</div>
                                    <div className="flex gap-x-3">
                                        <KategoriBlog title="Semua" />
                                        <KategoriBlog title="Kesehatan Mental" />
                                    </div>
                                </div>
                                <div className="pt-4 pb-2">
                                    <div className="font-bold text-sm pb-3">Hasil</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuBlog
