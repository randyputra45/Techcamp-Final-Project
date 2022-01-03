import React from 'react'
import BlogButton from '../components/BlogButton'

const ExampleExpert = () => {
    return (
        <div>
            <img src="exampleahliopened.png" alt="" />
            <div className="px-4">
                <div className="pt-6 text-xl">
                Ongen Cristian Joel, SPd
                </div>
                <div className="mt-2 text-gray-500 text-xs">
                    Ahli Psikolog
                </div>
                <div className="pt-6 text-gray-500 text-xs leading-relaxed">
                    Lulusan Universitas Islam Nusantara,
                    dalam bidang Pendidikan Khusus
                    dan saat ini sedang menyelesaikan
                    magister di bidang manajemen
                    pendidikan.
                    Berpengalaman lebih dari 15 tahun
                    dalam bidang pendidikan utnuk
                    anak dengan kebutuhan khusus dan
                    terapi.
                    Berpengalaman dalam terapi
                    indvidual yang berfokus pada
                    tingkah laku, bantuan akademik dan
                    konseling orang tua
                </div>
                <div className="flex botbar pb-4 pr-4 gap-x-3">
                    <BlogButton 
                        pic="white-back.svg"
                    />
                </div>
            </div> 
        </div>
    )
}

export default ExampleExpert
