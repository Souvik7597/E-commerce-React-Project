import { useState } from "react"



export default function LoginCreatAccount({ loginOpen,setLoginOpen }) {

    const [action, setAction] = useState("login")

    return (
        <div>
            {
                loginOpen && (
                    <div className="bg-white  absolute top-18 right-1/2  translate-x-1/2 md:translate-x-0 md:right-25 border border-[#eee] z-50 p-8 h-fit rounded-xl w-75 sm:w-80">
                        <h2 className="text-[#232323] text-2xl mb-5 text-center">{action}</h2>
                        <div>
                            <form onSubmit={e => e.preventDefault()} className="flex flex-col justify-center gap-5">
                                {action === "login" ? <div></div> :
                                    <div className="flex flex-col justify-center gap-5">
                                        <input className="py-2 px-5 border border-[#eee]" type="text" id="email" placeholder="First Name" name="text" />
                                        <input className="py-2 px-5 border border-[#eee]" type="text" id="pwd" placeholder="Last Name" name="text" />
                                    </div>
                                }

                                <div className="flex flex-col justify-center gap-5">
                                    <input className="py-2 px-5 border border-[#eee]" type="email" id="email" placeholder="Enter email" name="email" />
                                    <input className="py-2 px-5 border border-[#eee]" type="password" id="pwd" placeholder="Enter password" name="pswd" />
                                </div>

                                {action === "login" ?
                                    <div className="text-sm text-[#787878] flex items-center justify-between gap-3 sm:gap-8">
                                        <div>
                                            <input type="checkbox" name="remember" /> Remember me
                                        </div>

                                        <p>Forgot Password?</p>
                                    </div>
                                    :
                                    <div></div>
                                }


                                <button className="w-full py-2 px-6 rounded-md text-black bg-[#fff097] hover:text-white hover:bg-black transition-colors duration-300 uppercase" type="submit">{action === "login" ? "sign In" : "Create"}</button>
                                <button className="text-center text-sm md:text-[16px]" type="submit" onClick={(e) => {e.stopPropagation() ;setAction(action === "login" ? "sign up" : "login");setLoginOpen(true)}}>{action === "Login" ? "Create Account" : "Allready Have an Account ?"}</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
