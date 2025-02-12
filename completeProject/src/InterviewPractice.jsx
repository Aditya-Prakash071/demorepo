import React from "react";

const InterviewPractice = ()=>{
    return (
        <>
        <div className="h-[70vh]  bg-slate-200 m-32">
            <div  className="pt-8">
                <table  className="border-2 m-auto overflow-y border-collapse">
                    <thead className="text-2xl  uppercase text-rose-900">
                        <th scope="col" className=" px-8 py-3" >Id</th>
                        <th scope="col" className=" px-8 py-3" >Product</th>
                        <th scope="col"  className="px-8 py-3" >Category</th>
                        <th scope="col" className=" px-8 py-3" >Price</th>
                        <th scope="col" className=" px-8 py-3" >Discount</th>
                        <th scope="col" className=" px-8 py-3" >Gst</th>
                        <th scope="col" className=" px-8 py-3" >Action</th>
                    </thead>
                    <tbody>
                    <thead className="text-2xl   text-blue-900">
                        <th scope="row" class="px-8 py-4 font-medium  whitespace-nowrap  text-orange-700" >Id</th>
                    </thead>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default InterviewPractice