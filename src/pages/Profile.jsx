import React, {useContext} from 'react'
import DesktopAvatar from '../components/DesktopAvatar'
import MobileAvatar from '../components/MobileAvatar'
import MobileButton from '../components/MobileButton'
import NotifButton from '../components/NotifButton'
import ProfileBio from '../components/ProfileBio'
import ProfileButton from '../components/ProfileButton'
import { UserContext } from '../context/userContext';
import usePayCoaching from '../hooks/usePayCoaching'
import usePayWebinar from "../hooks/usePayWebinar"
import usePayDyslexia from "../hooks/usePayDyslexia"
import useConsultation from "../hooks/useConsultation"

const Profile = () => {
    const { user, isLoading } = useContext(UserContext);
    const{userCoaching} = usePayCoaching()
    const{userWebinar} = usePayWebinar()
    const{userDyslexia} = usePayDyslexia()
    const{userConsul} = useConsultation()

    console.log(userConsul)

    return (
        <div>
            <div className="block md:hidden">
                <div className="pt-24 pb-6 px-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Profil</div>
                            <div className="text-2xl font-bold">Salman Setiawan</div>
                        </div>
                        <NotifButton />
                    </div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="flex justify-between items-end">
                            <div className="font-bold text-sm">Biodata</div>
                                <div className="text-xxs text-blue-600">Ubah biodata disini</div>
                            </div>
                            <ProfileBio
                                kelamin={user.birth_date}
                                profesi="Mahasiswa"
                                tanggal="16 Oktober 2000"
                                kota="Balikpapan"
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Akun</div>
                            <MobileButton 
                                pic="konseling.svg"
                                title="Layanan yang diambil"
                                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                                url="/profile/blogs"
                            />
                            <MobileButton 
                                pic="webinar.svg"
                                title="Webinar yang diikuti"
                                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                                url="/profile/blogs"
                            />
                            <MobileButton 
                                pic="blog.svg"
                                title="Blog yang disukai"
                                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                                url="/profile/blogs"
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="font-bold text-sm">Pengaturan</div>
                            <MobileButton 
                                pic="blog.svg"
                                title="Ganti Email"
                                desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                            />
                            <MobileButton 
                                pic="ahli.svg"
                                title="Ganti Nomor Telepon"
                                desc="cek informasi mengenai para ahli yang bekerja pada kami."
                            />
                            <MobileButton 
                                pic="info.svg"
                                title="Ganti Kata Sandi"
                                desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                            />
                            <MobileButton 
                                pic="kolab.svg"
                                title="Keluar"
                                desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
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
                <div className="pt-16">
                    <div className='avatar-bg'></div>
                </div>
                <div className="px-4 py-12 flex flex-row items-start justify-center gap-4">
                    <div className="flex flex-col">
                        <div className="px-10 -mt-32">  
                            <img src="small-avatar.svg" alt="" className="h-36 rounded-full cursor-pointer" />
                        </div>
                        <div className="bg-body pt-24 px-10 -mt-16 back">
                            <div className="text-2xl font-bold">{`${user.first_name} ${user.last_name}`}</div>
                        </div>
                        <div className="py-8 px-10 bg-body">
                            <div className="pb-4">
                                <div className="flex justify-between items-center">
                                    <div className="text-lg font-bold">
                                        Biodata
                                    </div>
                                    <div className="cursor-pointer text-sm text-blue-600">
                                        Ubah biodata disini
                                    </div>
                                </div>
                            </div>
                            <ProfileBio
                                kelamin={user.birth_date}
                                profesi="Mahasiswa"
                                tanggal={user.birth_date}
                                kota="Balikpapan"
                            />
                        </div>
                        <div className="py-8 px-10 bg-body">
                            <div className="text-lg font-bold pb-4">
                                Akun
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                                <ProfileButton 
                                    pic="konseling.svg"
                                    title="Konsultasi yang diikuti"
                                    desc={`${userConsul && userConsul.length} Konseling`}
                                    url="/profile/conseling"
                                />
                                <ProfileButton 
                                    pic="webinar.svg"
                                    title="Webinar yang diikuti"
                                    desc={`${userWebinar && userWebinar.length} Webinar`}
                                    url="/profile/webinar"
                                />
                                <ProfileButton 
                                    pic="webinar.svg"
                                    title="Kelas yang diikuti"
                                    desc={`${userCoaching && userCoaching.length} Kelas`}
                                    url="/profile/coaching"
                                />
                                <ProfileButton 
                                    pic="webinar.svg"
                                    title="Dyslexia yang diikuti"
                                    desc={`${userDyslexia && userDyslexia.length} Layanan`}
                                    url="/profile/dyslexia"
                                />
                                <ProfileButton 
                                    pic="blog.svg"
                                    title="Blog yang disukai"
                                    desc={`${user.liked_blog.length} Blog`}
                                    url="/profile/blogs"
                                />
                            </div>
                        </div>
                        <div className="py-8 px-10 bg-body rounded-b-lg">
                            <div className="text-lg font-bold pb-4">
                                Pengaturan 
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
                                <ProfileButton  
                                    pic="mail.svg"
                                    title="Ganti Email"
                                    desc="salmansetiawan@mail.com"
                                />
                                <ProfileButton  
                                    pic="phone.svg"
                                    title="Ganti Nomor Telepon"
                                    desc="+62 888-8888-8888"
                                />
                                <ProfileButton  
                                    pic="key.svg"
                                    title="Ganti Kata Sandi"
                                    desc="Sa*****"
                                />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
