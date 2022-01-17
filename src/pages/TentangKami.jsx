import React from 'react'
import LandingNavbar from '../components/LandingNavbar'
import MemberCard from '../components/MemberCard'

const TentangKami = () => {
    return (
        <div>
            <div className="">
                <div className="topbar w-full">
                    <LandingNavbar />
                </div>
                <div className="px-12 lg:px-16 xl:px-24 2xl:px-52">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 pt-32">
                        <img src="randy.svg" alt="" className='block md:hidden w-2/3 pb-12' />
                        <MemberCard
                            title="Randy Christian Saputra"
                            role="Fullstack Developer"
                            desc="Mahasiswa kelahiran 4 Mei 2001 dan sekarang sedang mengenyam pendidikan di Universitas Brawijaya. Mempunyai passion dibidang IT khususnya Web Development dan Robotics, dan memiliki hobi mendengarkan musik dan badminton dikala senggang."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="randy.svg" alt="" className='hidden md:block w-2/6' />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-32">
                        <img src="salman.svg" alt="" className='block md:hidden w-2/3 pb-12' />
                        <MemberCard
                            title="Salman Setiawan"
                            role="Frontend Developer, UI/UX Designer"
                            desc="Mahasiswa kelahiran 16 Oktober 2000 dan sekarang sedang mengenyam pendidikan di Institut Teknologi Kalimantan. Mempunyai passion dibidang IT khususnya UI/UX, dan memiliki hobi mendengarkan musik dan membaca manhwa dikala senggang."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="salman.svg" alt="" className='hidden md:block w-2/6' />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 pt-32">
                        <img src="ike.svg" alt="" className='block md:hidden w-2/3 pb-12' />
                        <MemberCard
                            title="Ike Nurul Fatihah"
                            role="Backend Developer"
                            desc="Mahasiswa kelahiran 4 Mei 2001 dan sekarang sedang mengenyam pendidikan di Universitas Jember. Mempunyai passion dibidang IT khususnya Web Development dan UI/UX, dan memiliki hobi mendengarkan musik KPOP."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="ike.svg" alt="" className='hidden md:block w-2/6' />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 pt-32">
                        <img src="azadin.svg" alt="" className='block md:hidden w-2/3 pb-12' />
                        <MemberCard
                            title="Azadin Azhar Purba"
                            role="Backend Developer"
                            desc="Mahasiswa kelahiran 4 Mei 2001 dan sekarang sedang mengenyam pendidikan di Politeknik Negeri Medan. Mempunyai passion dibidang IT khususnya Elektronika dan Web Design, dan memiliki hobi mendengarkan musik dan bersepeda dikala senggang."
                            pic2="landing-konseling2.jpg"
                        />
                        <img src="azadin.svg" alt="" className='hidden md:block w-2/6' />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default TentangKami
