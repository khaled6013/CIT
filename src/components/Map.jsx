const Map = () => {
    return (
        <section className="w-full">
            <div className="w-full h-[450px] overflow-hidden relative">
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.560370438675!2d90.38072131536417!3d23.86973348453074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c417639097d5%3A0x6b4f7b6b1b6b1b1b!2sSector%2012%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625632512345!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(100%) invert(0%) contrast(1.2)' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="absolute top-4 left-4 bg-white p-4 shadow-md rounded-md max-w-[250px] hidden md:block">
                    <h3 className="font-bold text-gray-800 text-[14px]">Head Office - Dhaka</h3>
                    <p className="text-gray-600 text-[12px] mt-1">135/4, Diyabari Khalpar, Sector 12, Uttara, Dhaka-1230</p>
                    <a 
                        href="https://www.google.com/maps" 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[#3B82F6] text-[12px] font-medium mt-2 inline-block hover:underline"
                    >
                        View larger map
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Map