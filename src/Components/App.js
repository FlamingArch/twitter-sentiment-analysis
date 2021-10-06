import { SearchProvider } from "./Context";
import TopBar from "./TopBar";

function App() {
  return (
    <SearchProvider>
      <div className="bg-primary" style={{ width: "100vw", height: "100vh" }}>
        <TopBar />
      </div>
    </SearchProvider>
  );
}

export default App;
