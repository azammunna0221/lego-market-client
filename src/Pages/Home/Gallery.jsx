

const Gallery = () => {
    return (
        <div>
            <div className=" text-center m-8">
                <h2 className=" text-4xl font-extrabold">Whats Hot Now!</h2>
                <p className=" text-base font-mono">Whats more fun than watching and playing along? Shop characters and toys from their favorite shows.</p>
            </div>
            <div className="grid grid-col-1 md:grid-cols-3 gap-4 mb-4">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure className="object-cover h-48 w-96">
                        <img src="https://www.lego.com/cdn/cs/set/assets/blt2b163a472ef2e61f/21338.png?format=webply&fit=bounds&quality=70&width=800&height=800&dpr=1.5" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title pt-3 font-bold">LEGO CITY FUN!</h2>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/logos2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title pt-3 font-bold">LEGO DISNEY FUN!</h2>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/city1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title pt-3 font-bold">LEGO CITY FUN!</h2>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/city3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title pt-3 font-bold">LEGO TRANSPORT FUN!</h2>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/classic2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title pt-3 font-bold">LEGO CITY FUN!</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/classic3.jpg" alt="Shoes" /></figure>
                    <div className="card-body bottom-1">
                        <h2 className="card-title pt-3 font-bold ">LEGO CLASSIC FUN!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;