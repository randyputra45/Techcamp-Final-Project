import React from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import Form from '../components/Form'

const Partnership = () => {
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
                                    <div className="mb-1">Lainnya</div>
                                    <div className="text-3xl font-bold">Tes Kesehatan</div>
                                    <div className="pt-8 text-gray-500 leading-relaxed">
                                        Disini anda dapat mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Anda juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi.
                                    </div>
                                    <div className="pt-8">
                                        <div className="font-bold mb-2">Nama</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold mb-2">Instansi</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold mb-2">Email</div>
                                        <Form />
                                    </div>
                                    <div className="pt-4">
                                        <div className="font-bold mb-2">Nomor Handphone</div>
                                        <Form />
                                    </div>
                                    <div className="pt-8">
                                        <Button
                                            title="Kirim"
                                        />
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

export default Partnership
