import React from 'react'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import ButtonAction from '../components/ButtonAction'
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'
import { Link } from 'react-router-dom'

const MenuDyslexia = () => {
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <div className="pt-6">
                        <BackButton />
                    </div>
                    <div className="pt-20 flex justify-between pb-16">
                        <div className="flex flex-col">
                            <div className="text-sm mb-1">Layanan Kami</div>
                            <div className="text-2xl font-bold">Pusat Dyslexia</div>
                        </div>
                        <NotifButton />
                    </div>
                    <div className="text-gray-500 leading-relaxed pb-8 text-justify">
                        Disleksia adalah gangguan pada kemampuan otak untuk menerjemahkan gambar tertulis yang diterima dari mata menjadi pikiran yang bermakna. Ini adalah cacat "tersembunyi". Dari segi penampilan, mereka tampak "normal", seperti anak lainnya, tetapi menghadapi kesulitan dalam membaca, menulis, dan matematika. Namun, kecerdasan tidak terpengaruh; bahkan mungkin dalam kisaran superior atau berbakat.
                    </div>
                    <Link to="/dyslexia/pricing">
                        <ButtonAction
                            title="Pesan Sekarang"
                        />
                    </Link>
                    <div className="pt-12">

                    </div>
                </div>
            </div>
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
                                <div className="pb-8 text-justify">
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Pusat Dyslexia</div>
                                    <div className="pt-8 text-gray-500 leading-relaxed pb-8">
                                        Disleksia adalah gangguan pada kemampuan otak untuk menerjemahkan gambar tertulis yang diterima dari mata menjadi pikiran yang bermakna. Ini adalah cacat "tersembunyi". Dari segi penampilan, mereka tampak "normal", seperti anak lainnya, tetapi menghadapi kesulitan dalam membaca, menulis, dan matematika. Namun, kecerdasan tidak terpengaruh; bahkan mungkin dalam kisaran superior atau berbakat.
                                    </div>
                                    <Link to="/dyslexia/pricing">
                                        <ButtonAction
                                            title="Pesan Sekarang"
                                        />
                                    </Link>

                                    <div className="pt-16 font-semibold">
                                        Kondisi Terkait dengan Disleksia
                                    </div>
                                    <div className="mt-3 text-gray-500 text-justify">
                                        Disleksia dapat dikaitkan dengan kondisi lain seperti ADHD dan autisme karena terkadang seorang anak mungkin memiliki kondisi ini selain disleksia.
                                    </div>
                                    <div className="mt-4 text-gray-500 text-justify">
                                        Attention Deficit Hyperactivity Disorder (ADHD) adalah salah satu gangguan mental yang paling umum berkembang pada anak-anak di mana mereka mengalami kesulitan dalam memusatkan perhatian, tetap fokus, mengendalikan perilaku mereka dan menjadi hiperaktif.
                                    </div>
                                    <div className="mt-4 text-gray-500 text-justify">
                                        Autisme adalah gangguan perkembangan otak yang ditandai dengan gangguan interaksi sosial dan komunikasi, serta perilaku yang terbatas dan berulang.
                                    </div>


                                    <div className="pt-12 font-semibold">
                                        19 Tanda & Gejala Anak dengan Disleksia 
                                    </div>
                                    <div className="mt-3 text-gray-500">1. Kesulitan dengan mengikat mantel, tali sepatu dan dasi.</div>
                                    <div className="mt-2 text-gray-500">2. Sepatu sering berada di kaki yang salah, seolah-olah tidak menyadari bahwa mereka tidak nyaman.</div>
                                    <div className="mt-2 text-gray-500">3. Perilaku kikuk / rawan kecelakaan.
    Kesulitan dalam melompat atau melompat.</div>
                                    <div className="mt-2 text-gray-500">4. Kesulitan dalam melempar, menangkap atau menendang bola.</div>
                                    <div className="mt-2 text-gray-500">5. Kesulitan memahami preposisi terhubung ke arah mis. masuk/keluar, atas/bawah, bawah/atas, maju/mundur.</div>
                                    <div className="mt-2 text-gray-500">6. Kesulitan dalam melaksanakan lebih dari satu instruksi pada satu waktu.</div>
                                    <div className="mt-2 text-gray-500">7. Kemungkinan riwayat perkembangan bicara yang lambat.</div>
                                    <div className="mt-2 text-gray-500">8. Spoonerisme berlebihan, mis. "par car" untuk "parkir mobil", "beg and acorn" untuk "telur dan daging."</div>
                                    <div className="mt-2 text-gray-500">9. Kesulitan dalam mengucapkan kata-kata multi-suku kata mis. "rumah sakit" untuk "rumah sakit."</div>
                                    <div className="mt-2 text-gray-500">10. Kesulitan dalam mencari nama suatu benda.</div>
                                    <div className="mt-2 text-gray-500">11. Kebingungan antara kiri dan kanan.
    Preferensi tangan tidak ditentukan.</div>
                                    <div className="mt-2 text-gray-500">12. Tulisan tangan yang buruk dengan banyak pembalikan dan bentuk huruf yang buruk.</div>
                                    <div className="mt-2 text-gray-500">13. Ketidakmampuan untuk menyalin secara akurat, terutama dari papan tulis.</div>
                                    <div className="mt-2 text-gray-500">14. Kesulitan mengingat hari apa, tanggal lahir sendiri, alamat, dan nomor telepon.</div>
                                    <div className="mt-2 text-gray-500">15. Kesulitan belajar untuk memberitahu waktu.</div>
                                    <div className="mt-2 text-gray-500">16. Tidak yakin tentang "kemarin" atau "besok".</div>
                                    <div className="mt-2 text-gray-500">17. Kesulitan mengingat sesuatu secara berurutan mis. hari dalam seminggu, bulan dalam setahun, dan tabel perkalian.</div>
                                    <div className="mt-2 text-gray-500">18. Kemajuan membaca yang buruk pada metode melihat dan mengatakan dan phonic.</div>
                                    <div className="mt-2 text-gray-500">19. Kelelahan yang berlebihan karena jumlah konsentrasi dan usaha yang sering dibutuhkan untuk hasil yang sangat sedikit.</div>

                                    <img src="diagnosis.jpg" alt="" className='w-full pt-12' />
                                    <div className="pt-12 font-semibold">
                                        Diagnosa anak yang terkena Dyslexia
                                    </div>
                                    <div className="mt-3 text-gray-500">
                                        Diagnosis disleksia sangat penting dalam mengatasi kondisi ini dengan tepat. Hal ini terutama terjadi karena anak disleksia sering salah didiagnosis, karena beberapa kondisi lain dapat muncul dengan tanda dan gejala yang serupa. 
                                    </div>
                                    <div className="mt-4 text-gray-500">
                                        Disleksia dapat didiagnosis dengan menggunakan: 
                                    </div>

                                    <div className="pl-12">
                                        <div className="pt-8 font-semibold">
                                            Metode Tes - Tes IQ + Tes Membaca
                                        </div>
                                        <div className="mt-3 text-gray-500">
                                            Dua tes digunakan untuk menilai seorang anak dengan gejala seperti disleksia. Pertama, tes IQ dilakukan diikuti dengan tes membaca. Seorang anak disleksia akan menunjukkan hasil tes IQ rata-rata/di atas rata-rata, tetapi hasil tes membaca buruk. 
                                        </div>
                                        <div className="pt-8 font-semibold">
                                            "Checklist" Method
                                        </div>
                                        <div className="mt-3 text-gray-500">
                                            Metode ini adalah ketika daftar pertanyaan yang dibuat oleh para ahli digunakan untuk menilai seorang anak untuk indikasi disleksia. 
                                        </div>
                                    </div>

                                    <div className="mt-8 text-gray-500">
                                        Metode diagnosis dapat bervariasi termasuk bahkan tes skrining menggunakan permainan komputer dan sebagainya.
                                    </div>
                                    <div className="mt-4 text-gray-500">
                                        Hal terbaik yang harus dilakukan ketika anak Anda menunjukkan tanda dan gejala disleksia adalah mendekati profesional kesehatan untuk mengkonfirmasi atau menghilangkan diagnosis.
                                    </div>
                                    <div className="mt-4 text-gray-500">
                                        Semakin dini diagnosis disleksia dibuat, semakin baik. Hal ini terutama terjadi karena penelitian telah menunjukkan bahwa hasil terbaik untuk anak disleksia adalah ketika kondisi tersebut terdeteksi dan ditangani sejak dini. 
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

export default MenuDyslexia
