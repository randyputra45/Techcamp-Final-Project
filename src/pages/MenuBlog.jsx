import React, {useState, useEffect} from 'react'
import BlogCard from '../components/BlogCard'
import DesktopAvatar from '../components/DesktopAvatar'
import KategoriBlog from '../components/KategoriBlog'
import MobileNavbar from '../components/MobileNavbar'
import useBlog from '../hooks/useBlog'

const MenuBlog = () => {
    const {blogArticle} = useBlog()
    const [filteredBlog, setFilteredBlog] = useState([])

    const [allActive, setAll] = useState(true)
    const [mentalActive, setMental] = useState(false)
    const [produktifitasActive, setProduktifitas] = useState(false)
    const [pemahamanActive, setPemahamanDiri] = useState(false)

    const handleAll = () => {
        setAll(true)
        setMental(false)
        setPemahamanDiri(false)
        setProduktifitas(false)
        console.log("clicked")
    }

    const handleMental = () => {
        setAll(false)
        setMental(true)
        setPemahamanDiri(false)
        setProduktifitas(false)
        console.log("clicked")
    }
    
    const handleProduktifitas = () => {
        setAll(false)
        setMental(false)
        setPemahamanDiri(false)
        setProduktifitas(true)
        console.log("clicked")
    }
    
    const handlePemahamanDiri = () => {
        setAll(false)
        setMental(false)
        setPemahamanDiri(false)
        setPemahamanDiri(true)
        console.log("clicked")
    }

    if(blogArticle) {
        // console.log(JSON.parse(blogArticle[1].content[0])[0]);
        console.log(blogArticle)
        console.log(blogArticle.filter(article => {
            return article.categories.includes("Produktifitas")
        }));
    } // Get article

    useEffect(() => {
        function getFilteredBlog() {
            if (allActive) {
                setFilteredBlog(blogArticle)
            } else if (mentalActive) {
                setFilteredBlog(blogArticle.filter(article => {
                    return article.categories.includes("Mental Health")
                }))
            } else if (produktifitasActive) {
                setFilteredBlog(blogArticle.filter(article => {
                    return article.categories.includes("Produktifitas")
                }))
            } else {
                setFilteredBlog(blogArticle.filter(article => {
                    return article.categories.includes("Pemahaman Diri")
                }))
            }
        }
        getFilteredBlog();  
    }, [allActive, blogArticle, mentalActive, produktifitasActive]);


    
    return (
        <div>
            <div className="block md:hidden">
                <div className="px-6">
                    <MobileNavbar />
                    <div className="pt-24 flex flex-col">
                        <div className="text-sm mb-1">Lainnya</div>
                        <div className="text-2xl font-bold">Blog</div>
                    </div>
                    <div className="pt-8">
                        <div className="font-bold text-sm pb-3">Kategori</div>
                        <div className="flex gap-x-3">
                            <button onClick={() => handleAll()}>
                                <KategoriBlog color={allActive ? "bg-selected" : "bg-button"} textcolor={allActive ? "text-white" : "text-black"} title="Semua" />
                            </button>
                            <button onClick={() => handleMental()}>
                                <KategoriBlog color={mentalActive ? "bg-selected" : "bg-button"} textcolor={mentalActive ? "text-white" : "text-black"} title="Kesehatan Mental" />
                            </button>
                            <button onClick={() => handleProduktifitas()}>
                                <KategoriBlog color={produktifitasActive ? "bg-selected" : "bg-button"} textcolor={produktifitasActive ? "text-white" : "text-black"} title="Produktifitas" />
                            </button>
                            <button onClick={() => handlePemahamanDiri()}>
                                <KategoriBlog color={pemahamanActive ? "bg-selected" : "bg-button"} textcolor={pemahamanActive ? "text-white" : "text-black"} title="Pemahaman Diri" />
                            </button>
                        </div>
                    </div>
                    <div className="pt-8">
                        <div className="font-bold text-sm pb-3">Hasil</div>
                        <div className="flex flex-col gap-y-3">
                            {filteredBlog && filteredBlog.map((art) => (
                                <BlogCard
                                url={`/blogs/${art._id}`}
                                key={art._id}
                                title={art.title}
                                pic={art.image}
                                />
                            ))}
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
                                    <div className="mb-1">Layanan Kami</div>
                                    <div className="text-3xl font-bold">Blogs</div>
                                </div>
                                <div className="pt-2 pb-8">
                                    <div className="font-bold text-sm pb-4">Kategori</div>
                                    <div className="flex gap-x-3">
                                    <button onClick={() => handleAll()}>
                                        <KategoriBlog color={allActive ? "bg-selected" : "bg-button"} textcolor={allActive ? "text-white" : "text-black"} title="Semua" />
                                    </button>
                                    <button onClick={() => handleMental()}>
                                        <KategoriBlog color={mentalActive ? "bg-selected" : "bg-button"} textcolor={mentalActive ? "text-white" : "text-black"} title="Kesehatan Mental" />
                                    </button>
                                    <button onClick={() => handleProduktifitas()}>
                                        <KategoriBlog color={produktifitasActive ? "bg-selected" : "bg-button"} textcolor={produktifitasActive ? "text-white" : "text-black"} title="Produktifitas" />
                                    </button>
                                    <button onClick={() => handlePemahamanDiri()}>
                                        <KategoriBlog color={pemahamanActive ? "bg-selected" : "bg-button"} textcolor={pemahamanActive ? "text-white" : "text-black"} title="Pemahaman Diri" />
                                    </button>
                                    </div>
                                </div>
                                <div className="pt-4 pb-2">
                                    <div className="font-bold text-sm pb-3">Hasil</div>
                                </div>
                                <div className="flex flex-col gap-y-6">
                                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {filteredBlog && filteredBlog.map((art) => (
                                            <BlogCard
                                            url={`/blogs/${art._id}`}
                                            key={art._id}
                                            title={art.title}
                                            pic={art.image}
                                            />
                                        ))}
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

export default MenuBlog
