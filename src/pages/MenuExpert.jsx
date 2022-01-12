import React from 'react'
import BackButton from '../components/BackButton'
import DesktopAvatar from '../components/DesktopAvatar'
import ExpertCard from '../components/ExpertCard'
import NotifButton from '../components/NotifButton'
import usePsikolog from '../hooks/usePsikolog'

const MenuExpert = () => {
    const {psikolog} = usePsikolog()

    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <div className="pt-6">
                        <BackButton />
                    </div>
                    <div className="pt-20 flex justify-between pb-12">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Lainnya</div>
                            <div className="text-2xl font-bold">Profil Ahli</div>
                        </div>
                        <NotifButton />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <div className="grid grid-cols-3 gap-x-4">
                            <ExpertCard 
                                pic="rosdiana.jpg"
                                name="Rosdiana Setyaningrum, MPsi, MHPEd, Psikolog"
                                role="Dirut & Pendiri Bersama MS School & Wellbeing Center"
                            />
                            <ExpertCard 
                                pic="dianda.jpg"
                                name="Dianda Azani, SPsi, MPsi, Psikolog"
                                role="Psikolog"
                            />
                            <ExpertCard 
                                pic="alva.jpg"
                                name="Alva Paramitha, SPsi, MPsi, BFRP"
                                role="Psikolog"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-x-4">
                            <ExpertCard 
                                pic="mario.jpg"
                                name="Mario Carl Joseph, SPsi, MPsi, Psikolog"
                                role="Psikolog"
                            />
                            <ExpertCard 
                                pic="ongen.jpg"
                                name="Ongen Cristian Joel, SPd"
                                role="Psikolog"
                            />
                            <ExpertCard 
                                pic="veronica.jpg"
                                name="Veronica Clarissa, SPsi, MPsi, Psikolog"
                                role="Psikolog"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-x-4">
                            <ExpertCard 
                                pic="sarilani.jpg"
                                name="Sarilani Wirawan, SPsi, SE, MPSi"
                                role="Psikolog"
                            />
                            <ExpertCard 
                                pic="greg.jpg"
                                name="Greg Jakaria, S.E"
                                role="Terapis"
                            />
                            <ExpertCard 
                                pic="panega.jpg"
                                name="Arlingga Panega"
                                role="Pelatih Komunikasi"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-x-4">
                            <ExpertCard 
                                pic="irna.jpg"
                                name="Irna Silawaty, S.Psi, M.Psi, Psikolog"
                                role="Psikolog"
                            />
                            <ExpertCard 
                                pic="elsa.jpg"
                                name="Elsa Safira Pangaribuan, S.H., SpN"
                                role="Pelatih Yoga"
                            />
                            <ExpertCard 
                                pic="kezia.jpg"
                                name="Kezia Santoso, BSc"
                                role="Psikolog"
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
                                <div className="mb-1">Lainnya</div>
                                <div className="text-3xl font-bold">Profil Ahli</div>
                            </div>

                                <div className="grid grid-cols-3 gap-x-4 gap-y-6">
                                    {psikolog && psikolog.map((psi) => (
                                        <ExpertCard
                                        url={`/experts/${psi._id}`}
                                        name={psi.name}
                                        role={psi.role}
                                        pic={psi.image}
                                        />
                                    ))}
                                    {/* <ExpertCard 
                                        pic="rosdiana.jpg"
                                        name="Rosdiana Setyaningrum, MPsi, MHPEd, Psikolog"
                                        role="Dirut & Pendiri Bersama MS School & Wellbeing Center"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuExpert

