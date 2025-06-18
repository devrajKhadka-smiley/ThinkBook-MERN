import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import RateLimitUI from "../components/RateLimitUI";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setIsRatelimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        const data = res.data;
        console.log("Notes loaded!", data);
        setNotes(data);
        setIsRatelimited(false); // ✅ explicitly reset if successful
      } catch (error) {
        console.log("Error fetching notes:", error);
        if (error.response?.status === 429) {
          setIsRatelimited(true); // ✅ triggered only on 429
        } else {
          toast.error("Failed to load notes.");
          setIsRatelimited(false); // ✅ in case of other errors
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitUI />}
    </div>
  );
};

export default HomePage;
