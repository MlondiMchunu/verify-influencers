export default function InfluencerPageComponent({influencer}) {
    return (
        <>
            <div className="w-full text-white text-left  max-w-[1200px] mx-auto bg-[#101727] p-6 rounded-lg shadow-md">
            
            {/*Profile section*/}
            <div className="flex items-start gap-6">
                {/*Left Column - Profile Picture*/}
                <div className="w-24 h-24 flex-shrink-0">
                    <img 
                    src={influencer?.profilePicture || "src/assets/andrew.jpg"}
                    alt={influencer?.name}
                    className="w-full h-full rounded-full object-cover"
                    />
                </div>
            </div>


            </div>
        </>
    )
}