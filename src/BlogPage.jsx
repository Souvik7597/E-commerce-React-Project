import { useState } from "react";
import Blogcard from "./components/Blogcard";
import { blogCardData } from "./Utilities/productsCollection";





export default function BlogPage() {

    const [page, setPage] = useState(1);

    const recordsPerPage = 6;

    const lastIndex = page * recordsPerPage;

    const firstIndex = lastIndex - recordsPerPage;

    const records = blogCardData.slice(firstIndex, lastIndex);

    const nPage = Math.ceil(blogCardData.length / recordsPerPage);

    const numbers = [...Array(nPage + 1).keys()].slice(1);


    function prePage() {
        if (page !== 1) {
            setPage(page - 1)
        }
    }

    function changeCPage(id) {
        setPage(id)
    }

    function nextPage() {
        if (page !== nPage) {
            setPage(page + 1)
        }
    }


    return (
        <div className="container-width py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-15">

            {
                records.map((item, i) => (
                    <Blogcard items={item} key={i} />
                ))
            }
            </div>

            <div className="flex items-center justify-center">
                <ul className="inline-flex items-center border border-[#eee]">
                    <li onClick={prePage} className="border border-[#eee] py-2 px-3">
                        Prev
                    </li>
                    {
                        numbers.map((n, i) => (
                            <li onClick={() => changeCPage(n)} className={`border py-2 px-3 border-[#eee] ${page === n ? "bg-blue-800 text-white" : ""}`} key={i}>
                                {n}
                            </li>
                        ))
                    }

                    <li onClick={nextPage} className="border py-2 px-3 border-[#eee]">
                        Next
                    </li>
                </ul>
            </div>


        </div>
    )
}
 