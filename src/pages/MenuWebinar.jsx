import * as React from 'react';
import DesktopAvatar from '../components/DesktopAvatar'
import NotifButton from '../components/NotifButton'
import WebinarCard from '../components/WebinarCard'
import useWebinar from '../hooks/useWebinar'

const MenuWebinar = () => {
  const { webinar } = useWebinar()

  return (
    <div>
      <div className="">
        <div className="bg-begron2">
        </div>
        <div className="topbar w-full">
          <DesktopAvatar />
        </div>
        <div className="lg:px-4 2xl:px-16 pt-36 pb-24">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <div className="py-8 px-10 bg-body rounded-t-lg">
                <div className="pb-8">
                  <div className="text-sm mb-1">Layanan Kami</div>
                  <div className="text-2xl font-bold">Webinar</div>
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {/* {webinar && webinar.map(item => <WebinarCard
                      key={item._id}
                      title={item.title}
                      url={`/webinars/${item._id}`}
                      picnarsum1={item.psikolog[0].image}
                      picnarsum2={item.psikolog[1].image}
                      day={item.day}
                      date={item.date}
                      price={item.price}
                    />)} */}
                    <WebinarCard
                      title="Webinar Kesehatan Mental"
                      url='/webinars/1'
                      picnarsum1="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      picnarsum2="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      day="Kamis"
                      date="07 April 2022"
                      price="50000"
                    />
                    <WebinarCard
                      title="Webinar Kesehatan Mental"
                      picnarsum1="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      picnarsum2="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      day="Kamis"
                      date="07 April 2022"
                      price="50000"
                    />
                    <WebinarCard
                      title="Webinar Kesehatan Mental"
                      picnarsum1="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      picnarsum2="https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90"
                      day="Kamis"
                      date="07 April 2022"
                      price="50000"
                    />
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

export default MenuWebinar
