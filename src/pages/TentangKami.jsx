import React from 'react'
import LandingNavbar from '../components/LandingNavbar'
import MemberCard from '../components/MemberCard'

const TentangKami = () => {
    return (
        <div>
            <div className="hidden md:block">
                <div className="topbar w-full">
                    <LandingNavbar />
                </div>
                <div className="px-12 lg:px-16 xl:px-24 2xl:px-52">
                    <div className="flex items-center justify-between gap-x-4 pt-32">
                        <MemberCard
                            title="Randy Christian Saputra"
                            role="Fullstack Developer"
                            desc="isi sendiri ya."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="randy.svg" alt="" className='w-2/6' />
                    </div>
                    <div className="flex items-center justify-between pt-32">
                        <div className="w-3/6">
                            <MemberCard
                                title="Salman Setiawan"
                                role="Frontend Developer, UI/UX Designer"
                                desc="Mahasiswa kelahiran 16 Oktober 2000 dan sekarang sedang mengenyam pendidikan di Institut Teknologi Kalimantan. Mempunyai passion dibidang IT khususnya UI/UX, dan memiliki hobi mendengarkan musik dan membaca manhwa dikala senggang."
                                pic2="landing-konseling2.jpg"
                            />
                        </div>
                        <img src="salman.svg" alt="" className='w-2/6' />
                    </div>
                    <div className="flex items-center justify-between gap-x-4 pt-32">
                        <MemberCard
                            title="Ike Nurul Fatihah"
                            role="Backend Developer"
                            desc="isi sendiri ya."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="ike.svg" alt="" className='w-2/6' />
                    </div>
                    <div className="flex items-center justify-between gap-x-4 pt-32">
                        <MemberCard
                            title="Azadin Azhar Purba"
                            role="Backend Developer"
                            desc="isi sendiri ya."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="azadin.svg" alt="" className='w-2/6' />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default TentangKami
