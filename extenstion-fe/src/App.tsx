import { useEffect, useState } from "react";
import { useAIContentDetector } from "./hooks/detector";
// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

// interface Message {
//   wordCount?: number;
// }

function App() {
  const [wordCount, setWordCount] = useState(0);
  const [pageContent, setPageContent] = useState("");
  const [contentToSearch, setContentToSearch] = useState("");
  const { data, error, isLoading } = useAIContentDetector(contentToSearch);

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

  return (
    <main className="h-[380px] container mx-auto text-center p-2 overflow-hidden">
      <div className="p-4">
        <button
          onClick={() => setContentToSearch(pageContent)}
          className="bg-teal-700 cursor-pointer font-semibold text-white rounded-lg px-12 py-3 text-xs"
        >
          Yes, check this page for 6 cents
        </button>
        <div className="my-4">
          <h2 className="flex flex-col justify-center gap-2 my-6">
            <span className="text-6xl font-extrabold">{wordCount}</span>
            <span className="text-xs font-semibold">
              Words Detected on this page
            </span>
          </h2>
          {isLoading && <div className="loading-state">Loading....</div>}

          {data && (
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 text-sm font-semibold">
                Originality Score
              </p>
              <p className="text-4xl font-extrabold">
                {Math.floor(Number(data?.results[0].probability) * 100)}%
              </p>
              <p className="text-gray-500 text-sm font-semibold">
                {data?.results[0].probability > 0.5
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

          {!isLoading && !data && !error && (
            <div className="account-info">
              <p className="font-bold text-gray-500 my-2">
                30,583 word-credits available
              </p>
              <div>
                <a
                  href="http://localhost:3050/pricing"
                  target="_blank"
                  className="block text-purple-600 p-2 underline cursor-pointer my-2 text-sm font-semibold"
                  onClick={(event) => {
                    event.preventDefault();
                    chrome.tabs.create({
                      url: "http://localhost:3050/pricing",
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
      <footer className="text-xs justify-center flex gap-2 text-gray-300 font-semibold">
        <p>© {new Date().getFullYear()} DetAIctor</p>
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </footer>
    </main>
  );
}

export default App;
