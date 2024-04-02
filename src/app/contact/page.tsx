const page = () => {
    return (
        <div className="bg-white">
                  <div>

            <div>
                <img src="/assets/images/contactbg.png" />
            </div>
            <div className="md:p-20 bg-white">
                <div className="shadow-xl bg-white md:p-20 p-10 rounded-2xl flex flex-row flex-wrap md:gap-28 gap-10 justify-center ">
                    <div className="flex flex-col gap-y-5" >
                        <h1 className="text-[40px] font-semibold">We’d love to hear from you</h1>
                        <input type="text" placeholder="Your name*" className="border-2 bg-gray-50 p-2 rounded" />
                        <input type="number" placeholder="Phone*" className="border-2 bg-gray-50 p-2 rounded" />
                        <input type="email" placeholder="Your email*" className="border-2 bg-gray-50 p-2 rounded" />
                        <input type="text" placeholder="Your subject" className="border-2 bg-gray-50 p-2 rounded" />
                        <textarea className="border-2 bg-gray-50 p-2 rounded h-[140px]"
                            style={{ resize: 'vertical' }}
                            placeholder="Write your message..."
                            value=''
                        // onChange={}
                        />
                        <button className="bg-[#F3A20C] rounded-md p-2">SEND YOUR MESSAGE</button>

                    </div>
                    <div className="mapouter"><div className="gmap_canvas"><iframe className="rounded-2xl md:w-[460px] md:h-[535px]  h-[500px]" id="gmap_canvas" src="https://maps.google.com/maps?q=The%20Brookfield%20International%20school%20kondapur&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" ></iframe></div></div>

                </div>
            </div>
            </div>

        </div>
    )
}

export default page
