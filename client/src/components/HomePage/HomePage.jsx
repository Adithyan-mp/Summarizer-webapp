import React, { useState } from "react";
import "./HomePage.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Import toast from react-hot-toast

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedIn } = location.state || {};
  const [videoUrl, setVideoUrl] = useState("");

  const getVideoIdFromUrl = (url) => {
    const regex = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
    const match = url.match(regex);
    return match && match[1].length === 11 ? match[1] : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoId = getVideoIdFromUrl(videoUrl);
    if (videoId) {
      navigate(`/summary?videoId=${videoId}`);
    } else {
      // Display a toast message if the URL is invalid
      toast.error("Invalid YouTube URL");
    }
  };
  return (
    <div className="body-home">
      <header className="navbar">
        <div className="logo">
          <p className="logofont">YouTube Summarizer</p>
        </div>
        <nav className="navbar-2">
          <span className="navsign">
            {loggedIn ? (
              <Link to={"/profile"} className="navsigninlink">
                UserProfile
              </Link>
            ) : (
              <>
                <Link to={"/login"} className="navsigninlink">
                  Sign In
                </Link>
                <Link to={"/register"} className="navsignuplink">
                  Sign Up
                </Link>
              </>
            )}
          </span>
        </nav>
      </header>
      <main className="main-home">
        <section className="content">
          <div className="content-body">
            <h1 className="heading">Summarize YouTube Videos</h1>
            <p className="sub-heading">
              Enter a YouTube video URL and get a summary in seconds. Fast.
              Easy. Accurate.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input"
                placeholder="Enter YouTube URL"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              <button type="submit" className="button">
                Summarize Now
              </button>
            </form>
          </div>
        </section>
        <section className="how-it-works">
          <div className="steps">
            <div className="step">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <h3 className="step-heading">
                Upload Enter the URL of the video
              </h3>
              <p className="step-text">
                Our advanced algorithm processes the audio and transcript of the
                video to extract key sentences and phrases.
              </p>
            </div>
            <div className="step">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
              <h3 className="step-heading">
                Summarize Let our AI work its magic
              </h3>
              <p className="step-text">
                Our advanced algorithm processes the audio and transcript of the
                video to extract key sentences and phrases.
              </p>
            </div>
            <div className="step">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3 className="step-heading">
                Read Enjoy the summarized content
              </h3>
              <p className="step-text">
                Our advanced algorithm processes the audio and transcript of the
                video to extract key sentences and phrases.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
