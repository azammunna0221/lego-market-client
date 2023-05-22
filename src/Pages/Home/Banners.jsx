import banner1 from "../../../images/banner1.jpg"
import banner2 from "../../../images/banner2.jpg"
import banner3 from "../../../images/banner3.jpg"

const Banners = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="mx-auto space-y-4">
                            <h1 className=" font-mono font-extrabold text-5xl">Calling all dreamers!</h1>
                            <p className=" font-mono text-base text-slate-700">To celebrate the launch of LEGO® DREAMZzz™, <br /> weve launched a competition for your <br /> child to become one of our Chief Dream Creators!</p>
                            <div className="flex flex-row gap-5">
                                <button className="btn btn-primary rounded-md">Learn More ❯</button>
                                <button className="btn btn-outline rounded-md">Enter Now ❯</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
                        <div className="mx-auto space-y-4">
                            <h1 className=" font-mono font-extrabold text-5xl">ITs AN ARTISTIC PLAY!</h1>
                            <p className=" font-mono text-base text-slate-700">If there was no Lego in Billund, <br /> there will almost be no Billund... <br /> Lego is Billund, and Billund is Lego.!</p>
                            <div className="flex flex-row gap-5">
                                <button className="btn btn-primary rounded-md">Learn More ❯</button>
                                <button className="btn btn-outline rounded-md">Enter Now ❯</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-md" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                        <div className="mx-auto space-y-4">
                            <h1 className=" font-mono font-extrabold text-5xl">LEGO BUILDS FUTURE!</h1>
                            <p className=" font-mono text-base text-slate-700">With a bucket of Lego, you can tell any story. <br /> You can build an airplane or a dragon or a <br /> pirate ship - its whatever you can imagine.</p>
                            <div className="flex flex-row gap-5">
                                <button className="btn btn-primary rounded-md">Learn More ❯</button>
                                <button className="btn btn-outline rounded-md">Enter Now ❯</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banners;