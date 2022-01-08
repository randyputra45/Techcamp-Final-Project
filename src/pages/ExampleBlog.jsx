import React from 'react'
import BlogButton from '../components/BlogButton'
import BlogCard2 from '../components/BlogCard2'

const ExampleBlog = () => {
    return (
        <div>
            <div className="block md:hidden">
                <img src="exampleblogopened.png" alt="" className='object-cover w-full' />
                <div className="px-4">
                    <div className="pt-6 text-xl">
                        Dampak overthinking bisa berakibat fatal
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
                        Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                    </div>
                    <div className="mt-3 text-gray-500 text-xs leading-relaxed">
                        Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                    </div>
                    <div className="flex botbar pb-4 pr-4 gap-x-3">
                        <BlogButton 
                            pic="white-back.svg"
                        />
                        <BlogButton 
                            pic="like.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                {/* HEAD */}
                <div className="bg-active-button">
                    <div className="grid grid-cols-2">
                        <div className="flex pl-8 md:pr-12 lg:px-16 xl:px-36 2xl:px-60">
                            <div className="flex items-end pb-8">
                                <div className="text-2xl xl:text-3xl font-semibold text-white">
                                    Dampak overthinking bisa berakibat fatal
                                </div>
                            </div>
                        </div>
                        <img src="exampleblogopened.png" alt="" className='object-cover w-full h-full' />
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
                                    Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
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
                                            pic="exampleblogopened.png"
                                            title="artikel 1"
                                            desc="gatau"
                                        />
                                        <BlogCard2
                                            pic="exampleblogopened.png"
                                            title="artikel 1"
                                            desc="gatau"
                                        />
                                        <BlogCard2
                                            pic="exampleblogopened.png"
                                            title="artikel 1"
                                            desc="gatau"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="botbar pb-10 pr-12">
                    <BlogButton 
                        pic="like.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExampleBlog
