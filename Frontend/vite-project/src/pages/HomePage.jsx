import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";

const HomePage = () => {
  const [isRateLimited, setIsRatelimited] = useState(false);

  return (
    <div className="p-4 min-h-screen bg-base-100">
      <Navbar />
      {isRateLimited && <RateLimitUI />}
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button onClick={() => toast.success("First Toast Test!")}>
        Show Toast
      </button>
    </div>
  );
};

export default HomePage;
