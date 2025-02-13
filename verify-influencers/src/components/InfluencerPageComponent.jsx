export default function InfluencerPageComponent({ influencer }) {
    return (
        <>
            <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#101727] p-6 rounded-lg shadow-md">

                {/*Profile section*/}
                <div className="flex items-start gap-6">
                    {/*Left Column - Profile Picture*/}
                    <div className="w-18 h-18 flex-shrink-0">
                        <img
                            src={influencer?.profilePicture || "src/assets/andrew.jpg"}
                            alt={influencer?.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    {/*Right Column -Info */}
                    <div className="flex-1">
                        {/*Influencer Name*/}
                        <h2 className="text-xl font-bold">{influencer?.name || "Influencer Name"}</h2>

                        {/*Categories*/}
                        <div className="mt-3 flex-wrap gap-2">
                            {influencer?.categories?.length > 0 ?(
                                influencer.categories.map((category,index)=>(
                                    <button
                                    key={index}
                                    className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs/5">
                                        {category}
                                    </button>
                                ))
                            ) : (<p className="text-gray-400 text-xs/5">No categories available</p>)
                            }
                        </div>

                        {/*Profile Description */}
                        <p className="mt-1 text-gray-300 text-xs/5">
                            {influencer?.description || "No profile description available. No profile description available. No profile description available"}
                        </p>
                    </div>

                </div>


            </div>
        </>
    )
}