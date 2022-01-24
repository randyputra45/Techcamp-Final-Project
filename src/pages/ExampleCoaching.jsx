import React, {useEffect} from 'react'
import Button from '../components/Button'
import DesktopAvatar from '../components/DesktopAvatar'
import useCoaching from '../hooks/useCoaching'
import Content from '../components/ContentArticle';
import ButtonAction from '../components/ButtonAction';
import { useHistory } from 'react-router-dom';

const ExampleCoaching = () => {
    const {coachingContent, coachingID, getCoachingById} = useCoaching()
    const path = window.location.pathname
    const history = useHistory()

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
    useEffect(() => {
        getCoachingById(path)
    }, [path])

    const handleClick = () => {
        console.log(coachingID.materials)
        var today  = new Date();
        try {    
            const data = {
                date: today.toLocaleDateString("id", options),
                package: coachingID.materials,
                price: 150000
            }
            if(data) {
                history.push({
                    pathname: "/coach/payment",
                    state: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="hidden md:block">
                <div className="bg-begron2">
                </div>
                <div className="topbar w-full">
                    <DesktopAvatar />
                </div>
                <div className="pt-18 pb-24">
                    <div className="flex justify-center">
                        <div className="w-5/6 lg:w-4/6 xl:w-1/2">
                        <div className="flex flex-col">
                            <div className="py-8 px-10 bg-body rounded-t-lg">
                                <div className="pb-8">
                                    <div className="mt-6 text-2xl font-bold text-center">
                                        Kelas dan Pelatihan Online
                                    </div>
                                    <div className="mb-12 text-2xl font-bold text-center">
                                        "{coachingID && coachingID.materials}"
                                    </div>
                                    <img src={coachingID && coachingID.image} alt="" />
                                    <div className="border border-gray-300 rounded-b-xl p-8 mb-12">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xl font-bold">
                                                Rp. 150.000
                                            </div>
                                            <button onClick={() => handleClick()}>
                                                <ButtonAction
                                                    title="Pesan Sekarang"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                        <div className="col-span-2 text-sm md:text-sm lg:text-base leading-relaxed text-justify article-content pr-12">
                                        {coachingContent && coachingContent.content.map((item, i) => <Content key={i} subcontent={item.subcontent} paragraph={item.paragraph}/>)}
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

export default ExampleCoaching
