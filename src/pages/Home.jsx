import React, {useContext} from "react";
import DesktopAvatar from "../components/DesktopAvatar";
import MobileAvatar from "../components/MobileAvatar";
import MobileButton from "../components/MobileButton";
import { UserContext } from '../context/userContext';

const Home = (props) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="block md:hidden">
        <div className="pt-24 pb-6 px-6">
          <div className="text-sm mb-1">Halo Salman</div>
          <div className="text-2xl font-bold">
            apa yang bisa kami lakukan untukmu hari ini?
          </div>
          <div className="pt-8">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-sm">
                Lihat Informasi
              </div>
              <MobileAvatar
                pic="avatar.png"
                title="Salman Setiawan"
                desc="Mahasiswa"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-sm">
                Layanan Kami
              </div>
              <MobileButton
                pic="konseling.svg"
                title="Konsultasi dan Pemeriksaan Psikologis"
                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                url="/counseling"
              />
              <MobileButton
                pic="webinar.svg"
                title="Webinar"
                desc="mengikuti kegiatan webinar bertajuk kesehatan mental bersama narasumber ahli dan terpercaya."
                url="/webinars"
              />
              <MobileButton
                pic="coaching.svg"
                title="Pelatihan & Coaching Murid"
                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                url="/coaching"
              />
              <MobileButton
                pic="dyslexia.svg"
                title="Pusat Dyslexia"
                desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                url="/dyslexia"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-sm">
                Lainnya
              </div>
              <MobileButton
                url="/healthtest"
                pic="tes.svg"
                title="Tes Kesehatan"
                desc="lakukan tes bersama kami agar anda mengetahui kondisi dari kesehatan mental anda saat ini."
              />
              <MobileButton
                pic="blog.svg"
                title="Blog"
                desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                url="/blogs"
              />
              <MobileButton
                url="/experts"
                pic="ahli.svg"
                title="Profil Ahli"
                desc="disini terdapat informasi mengenai para ahli yang bekerja pada kami."
              />
              <MobileButton
                pic="info.svg"
                title="Tentang Kami"
                desc="lihat orang dibalik pembuatan website ini."
                url="/aboutus"
              />
              <MobileButton
                pic="kolab.svg"
                title="Kolaborasi"
                desc="ayo bekerja sama dengan kami, daftarkan diri anda sebagai mitra kami."
                url="/partnership"
              />
              <MobileButton
                pic="feedback.svg"
                title="Feedback"
                desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                url="/feedback"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-begron2"></div>
        <div className="topbar w-full">
          <DesktopAvatar />
        </div>
        <div className="pt-32 flex flex-col items-center">
          <div className="font-semibold mb-1">
            {user && user.first_name}
          </div>
          <div className="text-2xl font-bold">
            Apa yang bisa kami lakukan untukmu hari ini?
          </div>
        </div>
        <div className="px-4 py-12 flex lg:flex-row flex-col items-start justify-center gap-4">
          <div className="flex flex-col">
            <div className="p-8 bg-body rounded-t-lg">
              <div className="text-lg font-bold pb-4">
                Layanan Kami
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <MobileButton
                  pic="konseling.svg"
                  title="Konsultasi dan Pemeriksaan Psikologis"
                  desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                  url="/counseling"
                />
                <MobileButton
                  pic="webinar.svg"
                  title="Webinar"
                  desc="mengikuti kegiatan webinar bertajuk kesehatan mental bersama narasumber ahli dan terpercaya."
                  url="/webinars"
                />
                <MobileButton
                  pic="coaching.svg"
                  title="Pelatihan & Coaching Murid"
                  desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                  url="/coaching"
                />
                <MobileButton
                  pic="dyslexia.svg"
                  title="Pusat Dyslexia"
                  desc="lakukan penanganan kesehatan mental anda dengan orang yang ahli dibidangnya."
                  url="/dyslexia"
                />
              </div>
            </div>
            <div className="p-8 bg-body rounded-b-lg">
              <div className="text-lg font-bold pb-4">
                Lainnya
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <MobileButton
                  url="/healthtest"
                  pic="tes.svg"
                  title="Tes Kesehatan"
                  desc="lakukan tes bersama kami agar anda mengetahui kondisi dari kesehatan mental anda saat ini."
                />
                <MobileButton
                  pic="blog.svg"
                  title="Blog"
                  desc="baca juga artikel dan blog untuk menambah awareness anda tentang kesehatan mental."
                  url="/blogs"
                />
                <MobileButton
                  url="/experts"
                  pic="ahli.svg"
                  title="Profil Ahli"
                  desc="disini terdapat informasi mengenai para ahli yang bekerja pada kami."
                />
                <MobileButton
                  pic="info.svg"
                  title="Tentang Kami"
                  desc="silahkan melihat orang dibalik pembuatan website ini dan cari tau apa role mereka"
                  url="/aboutus"
                />
                <MobileButton
                  pic="kolab.svg"
                  title="Kolaborasi"
                  desc="ayo bekerja sama dengan kami, daftarkan diri anda sebagai mitra kami."
                  url="/partnership"
                />
                <MobileButton
                  pic="feedback.svg"
                  title="Feedback"
                  desc="silahkan berikan feedback agar kami dapat mengembangkan website kami jadi lebih baik lagi."
                  url="/feedback"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
