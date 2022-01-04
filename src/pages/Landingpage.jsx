import React from 'react'
import AnswerCard from '../components/AnswerCard'
import Button from '../components/Button'
import LandingButton from '../components/LandingButton'
import LandingNavbar from '../components/LandingNavbar'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'

const Landingpage = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-6">
                    <div className="text-2xl font-bold pb-12">Perawatan yang tepat di waktu yang tepat.</div>
                </div>
                <img className="w-full" src="homepict.svg" alt="" />
                <div className="py-24 px-6">
                    <div className="text-center pb-12">scroll untuk melihat lebih lanjut.</div>
                    <div className="pt-16">
                        <div className="font-bold mb-2">Siapa Kami?</div>
                        <div className="text-gray-500 text-sm leading-relaxed">MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.</div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Layanan yang kami tawarkan?</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Kenapa kami?</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                    <div className="pt-12">
                        <div className="font-bold mb-3">Sedikit testimoni dari user kami</div>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between">
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                                <LandingButton pic="konseling.svg" />
                            </div>
                            <AnswerCard 
                                title="Webinar" 
                                desc="anda dapat mengikuti kegiatan webinar bertemakan kesehatan mental yang disediakan oleh kami, kami juga mendatangkan langsung narasumber dari ahli yang terpercaya, dan anda bisa mendapatkan beberapa benefit menarik dari kami selama mengikuti kegiatan webinar."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <LandingNavbar />
                <img src="desktoplanding.svg" alt="" className='fixxxed' />

                <div className="px-12 xl:px-24 2xl:px-48 py-20 lg:py-28 xl:py-36 2xl:py-56">
                    <div className="bg-white p-4 w-96 rounded-lg">
                        <div className="text-xl font-bold">
                            Perawatan yang tepat di waktu yang tepat.
                        </div>
                        <div className=" mt-2 pb-8">
                            Over 17 million developers use GoCure. Get started by signing up or downloading the desktop app.
                        </div>
                        <Button
                            title="Daftar Sekarang"
                        />
                    </div>
                </div>
                <div className="py-32 flex justify-center gap-x-8">
                    <div className="flex items-center w-1/3">
                        <div className='flex flex-col'>
                            <div className="text-xl font-bold">
                                Siapa kami?
                            </div>
                            <div className=" mt-2 pb-8">
                                MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.
                            </div>
                        </div>
                    </div>
                    <img src="landing1.jpg" alt="" className='object-cover w-1/3' />
                </div>
            </div>
        </div>
    )
}

export default Landingpage
