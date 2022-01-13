import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'

const ExampleCoaching = () => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-36 pb-24">
                    <div className="flex justify-center">
                        <div className="w-5/6 lg:w-4/6 xl:w-1/2">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <img src="coaching-1.png" alt="" />
                                    <div className="pt-8 text-gray-500 leading-relaxed pb-8">
                                    Masalah yang lumayan sering dialami oleh dewasa muda adalah tidak bisa menerima atau memaafkan dirinya, yang mungkin dikarenakan oleh kesalahan atau kegagalan yang dialami di masa lalu. Berekspektasi lebih, selalu melihat kekurangan dan tidak menerima diri apa adanya menjadi salah satu kesulitan untuk berdamai dengan diri sendiri. Jika belum bisa memaafkan kesalahan akan berdampak pada perkembangan diri.
                                    </div>
                                    
                                    <div className="border border-gray-300 rounded-xl p-8">
                                    <div className="flex items-center justify-between">
                                        <div className="text-xl font-bold">
                                            Rp. 150.000
                                        </div>
                                        <Button
                                            title="Pesan Sekarang"
                                        />
                                    </div>
                                    </div>

                                    <div className="pt-16 font-semibold">
                                        Apa yang dipelajari disini?
                                    </div>
                                    <div className="mt-3 text-gray-500">1. Mengetahui penyebab konflik diri.</div>
                                    <div className="mt-2 text-gray-500">2. Mengetahui pentingnya berdamai dengan dengan diri.</div>
                                    <div className="mt-2 text-gray-500">3. Mengetahui penyebab sulitnya berdamai dengan diri sendiri.</div>
                                    <div className="mt-2 text-gray-500">4. Mengetahui tips untuk berdamai dengan diri sendiri.</div>
                                    
                                    <div className="pt-16 font-semibold">
                                        Kapan Kelas Online diadakan?
                                    </div>
                                    <div className="mt-3 text-gray-500">
                                        Disleksia dapat dikaitkan dengan kondisi lain seperti ADHD dan autisme karena terkadang seorang anak mungkin memiliki kondisi ini selain disleksia.
                                    </div>
                                    <div className="mt-4 text-gray-500">
                                        Attention Deficit Hyperactivity Disorder (ADHD) adalah salah satu gangguan mental yang paling umum berkembang pada anak-anak di mana mereka mengalami kesulitan dalam memusatkan perhatian, tetap fokus, mengendalikan perilaku mereka dan menjadi hiperaktif.
                                    </div>
                                    <div className="mt-4 text-gray-500">
                                        Autisme adalah gangguan perkembangan otak yang ditandai dengan gangguan interaksi sosial dan komunikasi, serta perilaku yang terbatas dan berulang.
                                    </div>
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

export default ExampleCoaching
