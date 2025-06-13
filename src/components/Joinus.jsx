import joinUsBg from "../images/joinusbg.webp"


export default function Joinus() {
    const bgProps = { backgroundImage: `url(${joinUsBg})` }


    return (
        <div className="container-width">
            <div style={bgProps} className="mx-auto bg-cover bg-center">
                <div className="text-center py-20 px-4">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">Join Our Newsletter</h2>
                    <p className="text-sm font-medium text-[#787878] mb-8">Hey you, sign up it only takes a second to be the first to find out about our latest news and <br /> promotions…</p>

                    <div className="bg-white inline-block">
                        <input type="text" className="bg-white py-3 ps-3 md:ps-4 md:pe-32" placeholder="Your Email" />
                        <button className="bg-[#ffef97] py-3 px-4 uppercase hover:bg-[#232323] hover:text-white transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
