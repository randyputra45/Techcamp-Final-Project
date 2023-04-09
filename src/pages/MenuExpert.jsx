import React from "react";
import BackButton from "../components/BackButton";
import DesktopAvatar from "../components/DesktopAvatar";
import ExpertCard from "../components/ExpertCard";
import NotifButton from "../components/NotifButton";
import usePsikolog from "../hooks/usePsikolog";

const MenuExpert = () => {
  const { psikolog } = usePsikolog();

  return (
    <div>
      <div className="">
        <div className="bg-begron2"></div>
        <div className="topbar w-full">
          <DesktopAvatar />
        </div>
        <div className="px-8 pt-36 pb-24">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="py-8 px-10 bg-body rounded-t-lg">
                <div className="pb-8">
                  <div className="mb-1">Lainnya</div>
                  <div className="text-3xl font-bold">
                    Profil Ahli
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                  {psikolog &&
                    psikolog.map((psi) => (
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
                                        role="Dirut & Pendiri Bersama MS School & Rumah Bercerita Center"
                                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuExpert;
