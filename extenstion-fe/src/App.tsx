import { useEffect, useState } from "react";
import { useAIContentDetector } from "./hooks/detector";
import { useUserAccount } from "./hooks/accounts";
import { BASE_URL } from "./constants";

function App() {
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [pageContent, setPageContent] = useState("");
  const [contentToSearch, setContentToSearch] = useState("");
  const { data, error, isLoading } = useAIContentDetector(contentToSearch);
  const { data: user, isLoading: gettingUserInfo } = useUserAccount(userId);

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) setUserId(userId);
  }, [userId]);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id! },
          func: () => {
            return {
              length: document.body.innerText.match(/\w+/g)?.length ?? 0,
              content: document.body.innerText,
            };
          },
        },
        (results) => {
          setWordCount(results[0]?.result?.length || 0);
          setPageContent(results[0]?.result?.content || "");
        },
      );
    });
  }, []);

  const handleUserAuth = async () => {
    setIsSubmitting(true);
    const response = await fetch(BASE_URL + "/api/users", {
      method: "post",
      body: JSON.stringify({ email }),
    });
    const userId = await response.json();
    setIsSubmitting(false);
    localStorage.setItem("user", userId.id);
  };

  return (
    <main className="h-[380px] container mx-auto text-center p-2 overflow-hidden">
      {!user && !gettingUserInfo ? (
        <div className="p-4">
          <div className="flex gap-2">
            <input
              className="w-full p-1 rounded-md border border-gray-300"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <button
              className="bg-teal-500 text-white rounded-md p-2 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-500"
              onClick={handleUserAuth}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wait.." : "Get Started"}
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <button
            onClick={() => setContentToSearch(pageContent)}
            className="bg-teal-700 cursor-pointer font-semibold text-white rounded-lg px-12 py-3 text-xs"
          >
            Yes, check this page for{" "}
            {Math.ceil(Number((wordCount * 10) / 1500))} cents
          </button>
          <div className="my-4">
            <h2 className="flex flex-col justify-center gap-2 my-6">
              <span className="text-6xl font-extrabold">{wordCount}</span>
              <span className="text-xs font-semibold">
                Words detected on this page
              </span>
            </h2>
            {isLoading && <div className="loading-state">Analyzing....</div>}

            {data && (
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 text-sm font-semibold">
                  Originality Score
                </p>
                <p className="text-4xl font-extrabold">
                  {Math.floor(Number(data?.score.original) * 100)}%
                </p>
                <p className="text-gray-500 text-sm font-semibold">
                  {data?.score.original > 0.5
                    ? "This content is unique"
                    : "This content is not unique"}
                </p>
              </div>
            )}

            {error && (
              <div className="error-state flex gap-2 justify-center">
                <p className="text-red-500 font-bold">Error:</p>
                <p className="text-red-400 underline font-medium">{error}</p>
              </div>
            )}

            {!isLoading && !data && !error && user && (
              <div className="account-info">
                <p className="font-bold text-gray-500 my-2">
                  {Number(user.creditsBalance * 1500).toLocaleString()} ($49.99)
                  words remaining after
                </p>
                <div>
                  <a
                    href="http://localhost:3050/pricing"
                    target="_blank"
                    className="block text-purple-600 p-2 underline cursor-pointer my-2 text-sm font-semibold"
                    onClick={(event) => {
                      event.preventDefault();
                      chrome.tabs.create({
                        url: BASE_URL + "/pricing",
                      });
                    }}
                  >
                    Get More Word-Credits
                  </a>
                  <button className="bg-gray-50 py-3 px-12 rounded-md text-xs text-gray-400 font-semibold">
                    Share and Get More Word-Credits
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <footer className="text-xs justify-center flex gap-2 text-gray-300 font-semibold">
        <p>© {new Date().getFullYear()} DetAIctor</p>
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </footer>
    </main>
  );
}

export default App;
