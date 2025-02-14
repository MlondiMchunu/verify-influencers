import Menubar from "./MenuBar";
import React, { useState } from 'react';
import { Settings, Plus } from "lucide-react";
import InfluencerNameComponent from './InfluencerNameComponent';
import ClaimsPerInfluencer from './ClaimsPerInfluencer';
import ProductsPerInfluencer from './ProductsPerInfluencer';
import BackToDashboard from "./BackToDashboard";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;


export default function ResearchTasksComponent() {
    const [isToggledRA, setIsToggledRA] = useState(false);//revenue analysis toggle

    const [isToggledVSJ, setIsToggledVSJ] = useState(false);// verify scientific journals toggle

    const [selectSpecificInfluencer, setselectSpecificInfluencer] = useState(false)// specific influencer toggle

    const [discoverNewInfluencers, setdiscoverNewInfluencers] = useState(false)// discover new influencers toggle

    const [selectedJournals, setSelectedJournals] = useState([]); // State to track selected journals

    const [selectedTimeRange, setSelectedTimeRange] = useState(null) //state to track selected time range

    const [influencerName, setInfluencerName] = useState("");//input influencer name

    const [claimsToAnalyze, setClaimsToAnalyze] = useState(0);//number of claims to analyze

    const [productsToFind, setProductsToFind] = useState(0); //number of products to find

    const [showInfluencerPage, setShowInfluencerPage] = useState(false);
    //const [influencerData, setInfluencerData] = useState(null)


    const navigate = useNavigate();

    // List of all journals
    const journals = [
        "PubMed Central",
        "Nature",
        "Science",
        "Cell",
        "The Lancet",
        "New England Journal of Medicine",
        "JAMA Network",
    ];

    // List of time ranges
    const timeRanges = ["Last Week", "Last Month", "Last Year", "All Time"];

    /*     const influencerData = {
            name: "Dr. Andrew Huberman",
            profilePicture: "src/assets/andrew.jpg", // Replace with actual URL
            categories: ["Neuroscience", "Sleep", "Performance", "Hormones", "Stress Management"],
            description: "Dr. Huberman is a neuroscientist and tenured professor at Stanford University.",
            trustScore: 85, // Example: 85% Trust Score
            yearlyRevenue: 72, // Example: 72% Yearly Revenue
            products: 15, // Example: 15 products sold
            followers: "2.5M", // Example: 2.5 Million followers
        }; */

    const handleStartResearch = async () => {
        //prepare the data to send to the AI API
        const researchData = {
            influencerName,
            timeRange: selectedTimeRange,
            claimsToAnalyze,
            productsToFind,
            includeRevenueAnalysis: isToggledRA,
            verifyWithScientificJournals: isToggledVSJ
        };

        try{
            //call the api
            const response = await fetch()
        }
    }

    //const handleStartResearch = () => {
    //  localStorage.setItem("selectedInfluencer", JSON.stringify(influencerData));
    //navigate("/influencer-page", { state: { influencer: influencerData } });
    //};


    const handleSpecificInfluencerSelect = () => {
        setselectSpecificInfluencer(!selectSpecificInfluencer)//toggle specific influencer select
    };

    const handleDiscoverNewInfluencers = () => {
        setdiscoverNewInfluencers(!discoverNewInfluencers)
    }

    // Function to handle time range selection
    const handleTimeRangeSelect = (range) => {
        setSelectedTimeRange(range); // Only one time range can be selected at a time
    };

    // Function to handle journal selection
    const handleJournalSelect = (journal) => {
        if (selectedJournals.includes(journal)) {
            // If the journal is already selected, remove it
            setSelectedJournals(selectedJournals.filter((j) => j !== journal));
        } else {
            // If the journal is not selected, add it
            setSelectedJournals([...selectedJournals, journal]);
        }
    };


    // Function to select all journals
    const handleSelectAll = () => {
        setSelectedJournals([...journals]); // Select all journals
    };

    // Function to deselect all journals
    const handleDeselectAll = () => {
        setSelectedJournals([]); // Deselect all journals
    };

    /*if (showInfluencerPage) {
        return <InfluencerPageComponent influencer={influencerData} />;
    }*/

    return (
        <div className="relative w-full max-w-full">
            <div className="absolute flex">
                <BackToDashboard />
                <span className="text-white font-bold">Research Tasks</span>
            </div>

            <div className="bg-[#182130] w-full mx-auto my-[50px] rounded-sm flex flex-col items-center justify-center relative overflow-hidden p-4">

                <div className="absolute top-0 left-0 flex items-center gap-2 p-4">
                    <Settings className="w-3 h-3 text-[#1db687]" />
                    <p className="text-white text-sm font-bold">Research Configuration</p>
                </div>

                {/* Main content divided into two columns */}
                <div className="mt-16 flex flex-wrap gap-4 justify-center w-full">

                    {/* Left column */}
                    <div className="flex-1 flex flex-col max-w-full sm:max-w-[1040px]">
                        {/* Left column content */}
                        <label className={`ml-[10px] w-full bg-[#182130] border-1 ${selectSpecificInfluencer
                            ? 'border-[#14b983] !bg-[#173438]' // Selected style
                            : 'border-gray-400' // Default style
                            } text-white px-[2px] py-4 rounded-sm mb-6 mt-[5px] flex flex-col items-center justify-center cursor-pointer text-center transition-all duration-300`}
                            onClick={handleSpecificInfluencerSelect}>
                            <span className="text-sm font-bold block ">Specific Influencer</span>
                            <span className="text-xs/5 opacity-80 block mt-1">
                                Research a known health influencer by name
                            </span>
                        </label>

                        <div className="text-white text-xs/5 opacity-80 text-left"><p className="ml-[5px]">Time Range</p></div>
                        <div className="ml-[10px] grid grid-cols-2 gap-1 w-full max-w-[1040px] opacity-80">

                            {timeRanges.map((range, index) => (
                                <label
                                    key={index}
                                    className={`w-full min-h-[30px] bg-[#182130] border-1 ${selectedTimeRange === range
                                        ? 'border-[#14b983] !bg-[#173438]' // Selected style
                                        : 'border-gray-400' // Default style
                                        } text-white flex items-center justify-center text-xs/5 rounded-sm cursor-pointer text-center transition-all duration-300`}
                                    onClick={() => handleTimeRangeSelect(range)}
                                >
                                    {range}
                                </label>
                            ))}

                        </div>

                        <div className="text-white text-xs/5 opacity-80 mt-[20px]" ><p className="ml-[5px] text-left">Influencer Name</p></div>
                        <div>
                            <InfluencerNameComponent />
                        </div>

                        <div className="text-white text-xs/5 opacity-80 mt-[20px]" ><p className="ml-[5px] text-left">Claims to Analyze Per Influencer</p></div>
                        <div>
                            <ClaimsPerInfluencer />
                        </div>
                        <div className="text-white text-xs/4 opacity-40 mt-[5px]" ><p className="ml-[5px] text-left">Recommended: 50-100 claims for comprehensive analysis</p></div>

                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col max-w-full sm:max-w-[1040px] w-full">
                        {/* Right Column Content */}
                        <label className={`ml-[10px] w-full bg-[#182130] border-1 ${discoverNewInfluencers
                            ? 'border-[#14b983] !bg-[#173438]' // Selected style
                            : 'border-gray-400' // Default style
                            } text-white px-[2px] py-4 rounded-sm mb-6 mt-[5px] flex flex-col items-center justify-center cursor-pointer text-center transition-all duration-300`}
                            onClick={handleDiscoverNewInfluencers}>
                            <span className="text-sm font-bold block ">Discover New</span>
                            <span className="text-xs/5 opacity-80 block mt-1">
                                Find and analyse new health influencers
                            </span>
                        </label>

                        <div className="text-white text-xs/5 opacity-80 mt-[10px]" ><p className="ml-[5px] text-left">Products to Find Per Influencer</p></div>
                        <div>
                            <ProductsPerInfluencer />
                        </div>
                        <div className="text-white text-xs/4 opacity-40 mt-[5px]" ><p className="ml-[5px] text-left">Set to 0 to skip product research</p></div>

                        <div>
                            <div>
                                <span className="flex flex-row mt-[15px]">
                                    <label className="ml-[10px] w-full bg-[#182130] border-0 border-gray-400 text-white px-6 py-4 rounded-sm flex flex-col items-left justify-center cursor-pointer text-left transition-all duration-300">
                                        <span className="text-sm font-bold block text-left">Include Revenue Analysis</span>
                                        <span className="text-xs/5 opacity-80 block mt-1">
                                            Analyze monetization methods and estimate earnings
                                        </span>
                                    </label>
                                    <div className="py-8">
                                        <button
                                            onClick={() => setIsToggledRA(!isToggledRA)}
                                            className={`w-10 h-5 rounded-full p-1 transition-colors duration-300 flex items-center justify-center ${isToggledRA ? '!bg-[#14bc81]' : 'bg-gray-600'
                                                }`}
                                        >
                                            <div
                                                className={`w-5 h-2 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggledRA ? 'translate-x-6' : 'translate-x-0'
                                                    }`}
                                            ></div>
                                        </button>
                                    </div>
                                </span>
                            </div>

                            <div>
                                <span className="flex flex-row">
                                    <label className="ml-[10px] w-full bg-[#182130] border-0 border-gray-400 text-white px-6 py-4 rounded-sm mb-6 flex flex-col items-left justify-center cursor-pointer text-left transition-all duration-300">
                                        <span className="text-sm font-bold block">Verify with Scientific Journals</span>
                                        <span className="text-xs/5 opacity-80 block mt-1">
                                            Cross-reference claims with scientific literature
                                        </span>
                                    </label>
                                    <div className="py-8">

                                        <button
                                            onClick={() => setIsToggledVSJ(!isToggledVSJ)}
                                            className={`w-10 h-5 rounded-full p-1 transition-colors duration-300 flex items-center justify-center ${isToggledVSJ ? '!bg-[#14bc81]' : 'bg-gray-500'
                                                }`}
                                        >
                                            <div
                                                className={`w-5 h-2 !bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggledVSJ ? 'translate-x-2' : 'translate-x-[-1px]'
                                                    }`}
                                            ></div>
                                        </button>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Scientific Journals*/}

                    <div className="w-full mt-2 px-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white text-xs/5 text-left">Scientific Journals</p> {/* Align text to the left */}
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSelectAll}
                                    className="!text-xs/5 text-[#14b983] hover:underline focus:outline-none !bg-transparent"
                                >
                                    Select All
                                </button> |
                                <button
                                    onClick={handleDeselectAll}
                                    className="!text-xs/5 text-[#14b983] hover:underline focus:outline-none !bg-transparent"
                                >
                                    Deselect All
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {journals.map((label, index) => (
                                <label
                                    key={index}
                                    className={`w-full bg-[#182130] border-1 ${selectedJournals.includes(label)
                                        ? 'border-[#14b983] !bg-[#173438]' // Selected style
                                        : 'border-gray-400' // Default style
                                        } text-white flex items-center justify-center text-xs py-2 rounded-sm cursor-pointer text-center transition-all duration-300`}
                                    onClick={() => handleJournalSelect(label)}
                                >
                                    {label}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Start Research Button */}
                    <div className="flex justify-end mt-4 w-full">
                        <button onClick={handleStartResearch}
                            className={`!bg-[#17715b] h-8 text-white !text-xs/5 flex items-center justify-center gap-2 rounded-xs hover:bg-[#12a575] transition-colors duration-300 px-4`}
                        >
                            <Plus size={12} className="text=white" />
                            Start Research
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
}