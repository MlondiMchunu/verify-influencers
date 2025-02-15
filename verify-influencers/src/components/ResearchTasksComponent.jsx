import React, { useState } from "react";
import { Settings, Plus } from "lucide-react";
import BackToDashboard from "./BackToDashboard";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

console.log("API KEY:", import.meta.env.VITE_API_KEY);
console.log("API URL:", import.meta.env.VITE_API_URL);

export default function ResearchTasksComponent() {
    const [isToggledRA, setIsToggledRA] = useState(false);
    const [isToggledVSJ, setIsToggledVSJ] = useState(false);
    const [selectSpecificInfluencer, setSelectSpecificInfluencer] = useState(false);
    const [discoverNewInfluencers, setDiscoverNewInfluencers] = useState(false);
    const [selectedJournals, setSelectedJournals] = useState([]);
    const [selectedTimeRange, setSelectedTimeRange] = useState(null);
    const [influencerName, setInfluencerName] = useState("");
    const [claimsToAnalyze, setClaimsToAnalyze] = useState(0);
    const [productsToFind, setProductsToFind] = useState(0);

    const navigate = useNavigate();

    const journals = [
        "PubMed Central",
        "Nature",
        "Science",
        "Cell",
        "The Lancet",
        "New England Journal of Medicine",
        "JAMA Network",
    ];

    const timeRanges = ["Last Week", "Last Month", "Last Year", "All Time"];

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

    // Function to start research and call the AI API
    const handleStartResearch = async () => {
        const researchData = {
            influencerName,
            timeRange: selectedTimeRange,
            claimsToAnalyze,
            productsToFind,
            includeRevenueAnalysis: isToggledRA,
            verifyWithScientificJournals: isToggledVSJ,
            selectedJournals,
        };

        const prompt = `
### **Task Overview:**
Analyze recent health-related content from "${influencerName}" within the "${selectedTimeRange}" period. This includes:
- Extracting and analyzing health-related tweets and podcast transcripts.
- Identifying and structuring distinct health claims.
- Removing duplicate claims (e.g., the same fact stated in multiple posts).
- Categorizing claims into "Nutrition", "Fitness", "Medicine", or "Mental Health etc".
- Verifying claims using ${isToggledVSJ ? `scientific journals: ${selectedJournals.join(", ")}` : "reliable sources"}.

---

### **Expected JSON Response Format:**
\`\`\`json
{
  "influencer": {
    "name": "${influencerName}",
    "category": (Nutrition, Fitness, Medicine, Mental Health etc),
    "followers": (number),
    "trustScore": (number),
    "trend": "Upward | Stable | Declining"
  },
  "claims": [
    {
      "text": "Health claim text here",
      "category": (Nutrition, Fitness, Medicine, Mental Health etc),
      "verified": true,
      "source": (PubMed, Nature, Science, etc),
      "confidenceScore": (number)
    }
  ],
  "products": [
    {
      "name": (Product Name/STRING),
      "type": (Supplement, Equipment, Service, ETC),
      "price": (amount)
    }
  ],
  ${isToggledRA ? `"estimatedRevenue": (number),` : ""}
  "analysisSummary": "A brief summary of the influencer's impact and credibility."
}
\`\`\`

---

### **Steps for AI Processing:**
1. **Data Extraction:** Fetch tweets and podcast transcripts from "${influencerName}" over the last "${selectedTimeRange}".
2. **Claim Identification:** Spot all health-related statements.
3. **Duplicate Removal:** Eliminate repeated claims (same claim across multiple sources).
4. **Claim Categorization:** Assign each claim a category: "Nutrition", "Fitness", "Medicine", or "Mental Health".
5. **Claim Verification:** Cross-check claims against ${isToggledVSJ ? `selected journals: ${selectedJournals.join(", ")}` : "trusted health databases"}.
6. **Final Output:** Provide structured JSON data following the expected format.

---

### **Additional Instructions:**
- The **trustScore** (0-100) should be calculated based on claim accuracy and follower engagement.
- The **trend** should reflect whether the influencer\'s credibility is increasing or declining.
- Ensure **consistent formatting** in the JSON output.`;


        console.log("This is the Prompt:", prompt)


        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`, // Fixed Authorization header
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini", // Replace with the correct model name
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 1000,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data from the AI API");
            }

            const data = await response.json();
            console.log("AI Response:", data.choices[0].message.content);

            // Transform the AI response into the expected structure
            const transformedData = {
                profilePicture: "src/assets/andrew.jpg", // Default image or fetch from API if available
                name: data.influencer?.name || influencerName,
                categories: [data.influencer?.category || "Health"],
                description: data.analysisSummary || "No description available.",
                trustScore: data.influencer?.trustScore || 0,
                yearlyRevenue: data.estimatedRevenue || 0,
                products: data.products?.length || 0,
                followers: data.influencer?.followers || 0,
            };

            // Save the API response to localStorage and navigate to the InfluencerPageComponent
            localStorage.setItem("selectedInfluencer", JSON.stringify(transformedData));
            navigate("/influencer-page", { state: { influencer: transformedData } });
        } catch (error) {
            console.error("Error fetching data from the AI API:", error);
            alert("An error occurred while fetching data. Please try again.");
        }
    };

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

                <div className="mt-16 flex flex-wrap gap-4 justify-center w-full">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col max-w-full sm:max-w-[1040px]">
                        <label
                            className={`ml-[10px] w-full bg-[#182130] border-1 ${selectSpecificInfluencer
                                ? "border-[#14b983] !bg-[#173438]"
                                : "border-gray-400"
                                } text-white px-[2px] py-4 rounded-sm mb-6 mt-[5px] flex flex-col items-center justify-center cursor-pointer text-center transition-all duration-300`}
                            onClick={() => setSelectSpecificInfluencer(!selectSpecificInfluencer)}
                        >
                            <span className="text-sm font-bold block">Specific Influencer</span>
                            <span className="text-xs/5 opacity-80 block mt-1">
                                Research a known health influencer by name
                            </span>
                        </label>

                        <div className="text-white text-xs/5 opacity-80 text-left">
                            <p className="ml-[5px]">Time Range</p>
                        </div>
                        <div className="ml-[10px] grid grid-cols-2 gap-1 w-full max-w-[1040px] opacity-80">
                            {timeRanges.map((range, index) => (
                                <label
                                    key={index}
                                    className={`w-full min-h-[30px] bg-[#182130] border-1 ${selectedTimeRange === range
                                        ? "border-[#14b983] !bg-[#173438]"
                                        : "border-gray-400"
                                        } text-white flex items-center justify-center text-xs/5 rounded-sm cursor-pointer text-center transition-all duration-300`}
                                    onClick={() => setSelectedTimeRange(range)}
                                >
                                    {range}
                                </label>
                            ))}
                        </div>

                        <div className="text-white text-xs/5 opacity-80 mt-[20px]">
                            <p className="ml-[5px] text-left">Influencer Name</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                value={influencerName}
                                onChange={(e) => setInfluencerName(e.target.value)}
                                className="bg-[#182130] border border-gray-400 text-white px-2 py-2 rounded-sm w-full"
                            />
                        </div>

                        <div className="text-white text-xs/5 opacity-80 mt-[20px]">
                            <p className="ml-[5px] text-left">Claims to Analyze Per Influencer</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                value={claimsToAnalyze}
                                onChange={(e) => setClaimsToAnalyze(e.target.value)}
                                className="bg-[#182130] border border-gray-400 text-white px-2 py-2 rounded-sm w-full"
                            />
                        </div>
                        <div className="text-white text-xs/4 opacity-40 mt-[5px]">
                            <p className="ml-[5px] text-left">Recommended: 50-100 claims for comprehensive analysis</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col max-w-full sm:max-w-[1040px] w-full">
                        <label
                            className={`ml-[10px] w-full bg-[#182130] border-1 ${discoverNewInfluencers
                                ? "border-[#14b983] !bg-[#173438]"
                                : "border-gray-400"
                                } text-white px-[2px] py-4 rounded-sm mb-6 mt-[5px] flex flex-col items-center justify-center cursor-pointer text-center transition-all duration-300`}
                            onClick={() => setDiscoverNewInfluencers(!discoverNewInfluencers)}
                        >
                            <span className="text-sm font-bold block">Discover New</span>
                            <span className="text-xs/5 opacity-80 block mt-1">
                                Find and analyse new health influencers
                            </span>
                        </label>

                        <div className="text-white text-xs/5 opacity-80 mt-[10px]">
                            <p className="ml-[5px] text-left">Products to Find Per Influencer</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                value={productsToFind}
                                onChange={(e) => setProductsToFind(e.target.value)}
                                className="bg-[#182130] border border-gray-400 text-white px-2 py-2 rounded-sm w-full"
                            />
                        </div>
                        <div className="text-white text-xs/4 opacity-40 mt-[5px]">
                            <p className="ml-[5px] text-left">Set to 0 to skip product research</p>
                        </div>

                        {/* Include Revenue Analysis Toggle */}
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
                                        className={`w-10 h-5 rounded-full p-1 transition-colors duration-300 flex items-center justify-center ${isToggledRA ? "!bg-[#14bc81]" : "bg-gray-600"
                                            }`}
                                    >
                                        <div
                                            className={`w-5 h-2 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggledRA ? "translate-x-6" : "translate-x-0"
                                                }`}
                                        ></div>
                                    </button>
                                </div>
                            </span>
                        </div>

                        {/* Verify with Scientific Journals Toggle */}
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
                                        className={`w-10 h-5 rounded-full p-1 transition-colors duration-300 flex items-center justify-center ${isToggledVSJ ? "!bg-[#14bc81]" : "bg-gray-500"
                                            }`}
                                    >
                                        <div
                                            className={`w-5 h-2 !bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggledVSJ ? "translate-x-2" : "translate-x-[-1px]"
                                                }`}
                                        ></div>
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>

                    {/* Scientific Journals Section */}
                    <div className="w-full mt-2 px-4">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-white text-xs/5 text-left">Scientific Journals</p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedJournals([...journals])}
                                    className="!text-xs/5 text-[#14b983] hover:underline focus:outline-none !bg-transparent"
                                >
                                    Select All
                                </button>
                                |
                                <button
                                    onClick={() => setSelectedJournals([])}
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
                                        ? "border-[#14b983] !bg-[#173438]"
                                        : "border-gray-400"
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
                        <button
                            onClick={handleStartResearch}
                            className={`!bg-[#17715b] h-8 text-white !text-xs/5 flex items-center justify-center gap-2 rounded-xs hover:bg-[#12a575] transition-colors duration-300 px-4`}
                        >
                            <Plus size={12} className="text-white" />
                            Start Research
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}