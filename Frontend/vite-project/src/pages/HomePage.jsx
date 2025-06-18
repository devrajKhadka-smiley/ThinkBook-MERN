import { toast } from "react-hot-toast";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button onClick={() => toast.success("First Toast Test!")}>
        Show Toast
      </button>
    </div>
  );
};

export default HomePage;
