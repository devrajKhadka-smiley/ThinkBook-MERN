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
    console.log("HomePage mounted");
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        const data = res.data;
        console.log("Notes loaded!", data);
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching notes:", error);
        setIsRatelimited(true);
        setLoading(false);
        console.log("Failed to fetch notes");
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-4 min-h-screen bg-base-100">
      <Navbar />
      {isRateLimited && <RateLimitUI />}
    </div>
  );
};

export default HomePage;
