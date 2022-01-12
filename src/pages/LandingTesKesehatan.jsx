import React from 'react'
import LandingButton2 from '../components/LandingButton2'
import LandingInfo2 from '../components/LandingInfo2'
import LandingNavbar from '../components/LandingNavbar'

const LandingTesKesehatan = () => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="topbar w-full">
                    <LandingNavbar />
                </div>
                <div className="px-12 lg:px-16 xl:px-24 2xl:px-52">
                    <div className="pt-32">
                        <LandingInfo2
                            title="Tes Kesehatan"
                            desc="Kamu bisa mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Kamu juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi."
                            pic="landing-tes-kesehatan.jpg"
                            pic2="landing-tes-kesehatan2.jpg"
                        />
                    </div>
                    <div className="pt-32 xl:px-12 2xl:px-16">
                        <div className="text-xl font-bold">
                            Benefit Melakukan Konseling dengan Peer Counselor
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 pt-6">
                            <LandingButton2 
                                pic="konseling.svg"
                                desc="Peer counselor memiliki rentang usia yang cenderung sama denganmu sehingga kamu akan lebih bebas untuk berkomunikasi dengan bahasa sehari-hari." 
                            />
                            <LandingButton2 
                                pic="konseling.svg"
                                title="SDM yang ahli dibidangnya"
                                desc="Peer counselor akan membantu kamu untuk dapat menerima emosi apapun yang dirasakan tanpa harus menolaknya." 
                            />
                            <LandingButton2 
                                pic="konseling.svg"
                                title="aksesibilitas yang mudah"
                                desc="Peer counselor akan menjadi teman diskusimu untuk dapat menemukan penyelesaian terhadap masalah yang sedang kamu hadapi. Yuk, hadapi bersama!" 
                            />
                        </div>
                    </div>
                    <div className="pt-32 xl:px-12 2xl:px-16">
                        <div className="text-xl font-bold">
                            Alur Pendaftaran "<i>Konsultasi dan Pemeriksaan Kesehatan Psikologis</i>"
                        </div>
                        <div className="">
                            <img src="alur-konseling.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default LandingTesKesehatan
