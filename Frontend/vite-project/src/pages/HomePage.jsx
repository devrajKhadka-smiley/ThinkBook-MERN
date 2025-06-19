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

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading ? (
          <div className="text-center text-primary py-10">Loading notes...</div>
        ) : isRateLimited ? null : notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {notes.map((note, idx) => (
              <div key={idx}>
                {note.title} || {note.content}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-10">
            No notes available.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
