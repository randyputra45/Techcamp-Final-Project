import React, {useContext} from 'react'
import AnswerCard from '../components/AnswerCard'
import Button from '../components/Button'
import DesktopActiveButton2 from '../components/DesktopActiveButton2'
import LandingButton from '../components/LandingButton'
import LandingNavbar from '../components/LandingNavbar'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'
import { UserContext } from '../context/userContext';

const Landingpage = () => {

    const { user, isLoading } = useContext(UserContext); 
    console.log(user, isLoading);

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
                <div className="topbar w-full">
                    <LandingNavbar />
                </div>
                <img src="desktoplanding.svg" alt="" className='fixxxed' />
                <div className="px-12 xl:px-24 2xl:px-56 py-20 lg:py-32 xl:py-52 2xl:py-56">
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
                <div className="pt-32 px-12 lg:px-16 xl:px-24 2xl:px-56">
                    <div className="flex items-center md:gap-x-8 xl:gap-x-16 2xl:gap-x-24">
                        <div className='flex flex-col w-2/3 2xl:w-1/2'>
                            <div className="text-xl font-bold">
                                Siapa kami?
                            </div>
                            <div className="mt-2 leading-relaxed">
                                MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.
                            </div>
                        </div>
                        <img src="landing1.jpg" alt="" className='object-cover w-1/2' />
                    </div>
                </div>
                <div className="px-12 lg:px-16 xl:px-24 2xl:px-56">
                    <div className="pt-32">
                        <div className="text-xl font-bold">
                            Layanan Kami
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-6">
                            <LandingButton 
                                pic="konseling.svg"
                                title="konseling"
                                desc="disini anda bisa melakukan penanganan kesehatan mental anda dengan orang yang terpercaya dan ahli dibidangnya." 
                            />
                            <LandingButton 
                                pic="webinar.svg"
                                title="webinar"
                                desc="disini anda bisa mengikuti kegiatan webinar bertajuk kesehatan mental bersama narasumber ahli dan terpercaya." 
                            />
                            <LandingButton 
                                pic="blog.svg"
                                title="blog"
                                desc="disini anda bisa membaca ragam artikel dan blog untuk menambah awareness anda tentang kesehatan mental." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="tes kesehatan"
                                desc="disini anda juga dapat melakukan tes kesehatan bersama kami agar anda mengetahui kondisi dari kesehatan mental anda saat ini." 
                            />
                        </div>
                        <div className="pt-8 flex justify-center">
                            <DesktopActiveButton2
                                title="Pelajari Lebih Lanjut"
                            />
                        </div>
                    </div>
                    <div className="pt-32">
                        <div className="text-xl font-bold">
                            Kenapa Kami?
                        </div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 pt-6">
                            <LandingButton 
                                pic="konseling.svg"
                                title="24 jam pelayanan konsumen"
                                desc="GoCure hadir dengan memberikan pelayanan sepenuh hati kepada konsumen. Siap melayani konsumen kapanpun user inginkan." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="SDM yang ahli dibidangnya"
                                desc="Kami bekerjasama dengan tenaga yang ahli dibidangnya, tidak hanya mendengarkan, tetapi juga memberikan saran dan solusi yang terbaik untuk konsumen." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="aksesibilitas yang mudah"
                                desc="GoCure dibuat dengan antarmuka dengan aksesibilitas yang menarik dan sangat user friendly untuk memudahkan pengguna mengakses website kami." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="proses konseling yang cepat"
                                desc="tidak perlu untuk menunggu lama, jadwal konsultasimu akan segera dikirim melalui email yang didaftarkan." 
                            />
                        </div>
                    </div>
                    <div className="py-32">
                        <div className="text-xl font-bold">
                            Kenapa Kami?
                        </div>
                        <div className="flex justify-between gap-x-4 pt-6">
                            <LandingButton 
                                pic="konseling.svg"
                                title="konseling"
                                desc="MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="konseling"
                                desc="MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="konseling"
                                desc="MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus." 
                            />
                            <LandingButton 
                                pic="konseling.svg"
                                title="konseling"
                                desc="MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus." 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
