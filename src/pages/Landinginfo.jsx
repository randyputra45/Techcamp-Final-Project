import React from 'react'
import AnswerCard from '../components/AnswerCard'
import LandingButton from '../components/LandingButton1'
import LandingInfo from '../components/LandingInfo'
import LandingNavbar from '../components/LandingNavbar'

const Landinginfo = () => {
  return (
    <div>
      <div className="">
        <div className="topbar w-full">
          <LandingNavbar />
        </div>
        <div className="px-12 lg:px-16 xl:px-24 2xl:px-52">
          <div className="pt-32">
            <LandingInfo
              url="/infolayanan/konsultasi"
              title="Konsultasi dan Pemeriksaan Psikologis"
              desc="layanan ini merupakan sesi konseling yang diadakan oleh kami untuk memeriksa kesehatan anda secara psikologis, yang mana bisa anda lakukan melalui voice call, video call, dan juga meet secara offline. Konseling Terapi ini juga dapat dilakukan secara 1 on 1 ataupun berkelompok sesuai dengan paket yang diambil."
              pic="landing-konseling.jpg"
              pic2="landing-konseling2.jpg"
            />
          </div>
          <div className="pt-32">
            <LandingInfo
              url="/infolayanan/webinar"
              title="Webinar"
              desc="Kami juga menyediakan Webinar Kesehatan agar kamu mendapatkan lebih banyak  informasi mengenai pentingnya Kesehatan Mental. Topik yang diangkat akan selalu berbeda disetiap pertemuannya. Dan pastinya Webinar ini akan dinarasumberi oleh Psikolog hebat dan ternama."
              pic="landing-webinar.jpg"
              pic2="landing-webinar2.jpg"
            />
          </div>
          <div className="pt-32">
            <LandingInfo
              url="/infolayanan/coaching"
              title="Pelatihan dan Coaching Murid"
              desc="layanan ini merupakan sesi konseling yang diadakan oleh kami untuk memeriksa kesehatan anda secara psikologis, yang mana bisa anda lakukan melalui voice call, video call, dan juga meet secara offline. Konseling Terapi ini juga dapat dilakukan secara 1 on 1 ataupun berkelompok sesuai dengan paket yang diambil."
              pic="landing-coaching.jpg"
              pic2="landing-coaching2.jpg"
            />
          </div>
          <div className="pt-32">
            <LandingInfo
              url="/infolayanan/dyslexia"
              title="Pusat Dyslexia"
              desc="layanan ini merupakan sesi konseling yang diadakan oleh kami untuk memeriksa kesehatan anda secara psikologis, yang mana bisa anda lakukan melalui voice call, video call, dan juga meet secara offline. Konseling Terapi ini juga dapat dilakukan secara 1 on 1 ataupun berkelompok sesuai dengan paket yang diambil."
              pic="landing-dyslexia.jpg"
              pic2="landing-dyslexia2.jpg"
            />
          </div>
          <div className="pt-32">
            <LandingInfo
              url="/infolayanan/blogs"
              title="Blog"
              desc="Agar pengetahuan Kesehatan Mentalmu bertambah, kamu dapat membaca beberapa Artikel Kesehatan yang telah disediakan. Artikel ini pastinya akan selalu di update setiap hariya dengan topik yang hangat dan  sedang terjadi saat ini."
              pic="landing-blog.jpg"
              pic2="landing-blog2.jpg"
            />
          </div>
          <div className="py-32">
            <LandingInfo
              url="/infolayanan/healthtest"
              title="Tes Kesehatan"
              desc="Kamu bisa mencoba Tes Kesehatan untuk mengetahui sejauh mana tingkat kecemasanmu saat ini. Kamu juga akan melihat hasilnya setelah menjawab seluruh pertanyaan dengan jujur dan benar untuk dipertimbangkan ikut atau tidaknya mengikuti konsultasi."
              pic="landing-tes-kesehatan.jpg"
              pic2="landing-tes-kesehatan2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landinginfo
