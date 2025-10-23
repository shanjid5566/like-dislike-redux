import { FaHeart, FaThumbsDown } from 'react-icons/fa';
import { GrRefresh } from 'react-icons/gr';

const LikeDislikeApp = () => {
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      <div className="bg-white w-full max-w-sm p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Give Your Feedback
        </h2>

        {/* --- Count Display --- */}
        <div className="flex justify-around mb-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-green-500">0
            </div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Total Likes
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-red-500">0
            </div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Total Dislikes
            </div>
          </div>
        </div>

        {/* --- Button Controls --- */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          {/* Like Button */}
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-150 ease-in-out"
          >
            {/* Reverted to inline SVG component */}
            <FaHeart />
            Like
          </button>

          {/* Dislike Button */}
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition duration-150 ease-in-out"
          >
            {/* Reverted to inline SVG component */}
            <FaThumbsDown />
            Dislike
          </button>
        </div>

        {/* Reset Button */}
        <div className="mt-4">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            {/* Reverted to inline SVG component */}
            <GrRefresh />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeDislikeApp;
