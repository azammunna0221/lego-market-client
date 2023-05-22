

const SpotLight = () => {
    return (
        <div>
            <p className="mb-5 text-5xl font-bold text-center">SPOTLIGHT ON!</p>
            <div className="grid grid-cols-1 md:grid-cols-3 my-8">
                <div className="card w-96 glass">
                    <figure><img src="https://www.lego.com/cdn/cs/set/assets/blt0d9d75b5b40de8c1/40589-GWP-202304-PLP-Disruptor.jpg?fit=crop&format=webply&quality=80&width=642&height=687&dpr=1.5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">A Fun Gift For Little Shipmates</h2>
                        <p>HGet pirate ships playground with 100$ more?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-link">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://www.lego.com/cdn/cs/set/assets/blt4a7ccd2874fe8e72/MakingWonder-202304-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Make Wonders</h2>
                        <p>There have been a whole lot of changes as Disney has grown from a small animation studio</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-link">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://www.lego.com/cdn/cs/set/assets/blt41eeb5673b61778f/1822-Vehicles-PLP-202303-Disruptor-Single-KV1.jpg?fit=crop&format=webply&quality=80&width=642&height=687&dpr=1.5" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">LEGO CAR MAKE DREAMS</h2>
                        <p>Kids 6+ can learn as they play and explore their passion for engineering with detailed LEGO® Technic™ designs.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-link">Learn now!</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SpotLight;