import { useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

// Dummy initial reviews array
const initialReviews = [
  {
    id: 1,
    name: "T-bos Makafula",
    rating: 2,
    comment: "They were okey i think they can do better.",
  },
  {
    id: 2,
    name: "Thuso Uluz",
    rating: 5,
    comment: "OHH shame the best cakes i've ever had.",
  },
];

const CustomerReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!name || !comment || rating === 0) {
      alert("Please fill out all fields and select a rating!");
      return;
    }

    // Format the review message
    const reviewMessage = `Hello! I'd like to submit my review:\nName: ${name}\nRating: ${rating} ⭐\nComment: ${comment}`;
    
    // WhatsApp URL
    const whatsappNumber = "27739716875"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(reviewMessage)}`;

    // Open WhatsApp link
    window.open(whatsappURL, "_blank");

    // Optionally add the review to the UI dynamically
    const newReview = {
      id: reviews.length + 1,
      name,
      rating,
      comment,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 border bg-white shadow-2xl rounded-lg bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      {/* Title */}
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4 font-quicksand">Customer Reviews</h2>
        <Link
            to="/">
            <button className="border p-1 rounded-full bg-gray-200 font-bold  text-pink-500 hover:bg-pink-500 hover:text-white">Back</button>
        </Link>
      </div>
      

      {/* Review List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-3 bg-gray-50 border-l-4 border-pink-500 rounded-md shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold font-quicksand">{review.name}</h4>
              <div className="flex items-center space-x-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 text-gray-700 font-lora">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Review Submission Form */}
      <div className="mt-8 p-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-2 font-quicksand text-center">Leave a Review</h3>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border-none rounded-md font-lora"
          />
          <textarea
            placeholder="Write your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />


          <div className="flex justify-center">
            <label className=" text-sm font-quicksand">Rating:</label>
          </div>
          <div className="flex items-center space-x-2 text-center justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`p-1 rounded border cursor-pointer ${
                  star <= rating
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-pink-500"
                }`}
                onClick={() => setRating(star)}
              >
                {star} <Cookie height={20}/>
              </button>
            ))}
          </div>
          <div className="flex justify-center content-center font-cookie text-2xl">
            <button
                onClick={handleSubmit}
                className="p-5 bg-green-500 text-white py-2 rounded-3xl hover:bg-green-600 transition"
            >
                Send Review via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
