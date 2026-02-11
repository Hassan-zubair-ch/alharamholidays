"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { TRUSTPILOT_REVIEWS, TRUSTPILOT_REVIEW_COUNT } from "@/lib/data";

const CARD_WIDTH = 320;
const GAP = 24;

function ReviewCard({
  review,
  className = "",
}: {
  review: (typeof TRUSTPILOT_REVIEWS)[0];
  className?: string;
}) {
  return (
    <div
      className={`flex-shrink-0 rounded-lg p-4 min-h-[200px] flex flex-col bg-white border border-slate-100 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4].map((star) => (
            <svg
              key={star}
              className="w-4 h-4 text-[#00b67a]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          {review.rating === 5 ? (
            <svg className="w-4 h-4 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-[#00b67a] opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </div>
        <span className="flex items-center gap-1 text-[#00b67a] text-xs font-medium">
          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Verified
        </span>
      </div>
      <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{review.headline}</h3>
      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-1">{review.body}</p>
      <p className="text-slate-500 text-xs mt-2">
        {review.name}, {review.timeAgo}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [resetting, setResetting] = useState(false);
  const total = TRUSTPILOT_REVIEWS.length;

  const goNext = useCallback(() => {
    setIndex((i) => {
      if (i + 1 >= total) return total;
      return i + 1;
    });
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? total - 1 : i - 1));
  }, [total]);

  useEffect(() => {
    if (index === total) {
      setResetting(true);
      setIndex(0);
      const id = requestAnimationFrame(() => setResetting(false));
      return () => cancelAnimationFrame(id);
    }
  }, [index]);

  useEffect(() => {
    if (resetting) {
      const t = setTimeout(() => setResetting(false), 50);
      return () => clearTimeout(t);
    }
  }, [resetting]);

  useEffect(() => {
    const t = setInterval(goNext, 4000);
    return () => clearInterval(t);
  }, [goNext]);

  const loopReviews = [...TRUSTPILOT_REVIEWS, ...TRUSTPILOT_REVIEWS];
  const offset = -index * (CARD_WIDTH + GAP);

  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-[#1e3a5f] mb-10">
          What our customers are saying about us
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left panel - rating summary */}
          <div className="flex-shrink-0 lg:w-72">
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Excellent</p>
            <div className="flex gap-0.5 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-[#00b67a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 text-sm mb-4">
              Based on{" "}
              <span className="underline cursor-pointer hover:text-slate-900">
                {TRUSTPILOT_REVIEW_COUNT} reviews
              </span>
            </p>
            <div className="flex items-center gap-2 text-slate-800 font-bold mb-1">
              <svg className="w-5 h-5 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Trustpilot</span>
            </div>
            <p className="text-slate-500 text-xs">Showing our 4 & 5 star reviews</p>
          </div>

          {/* Mobile: single card, touch scroll, no arrows */}
          <div className="flex-1 w-full min-w-0 lg:hidden">
            <div
              className="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 -mx-1 px-1 snap-x snap-mandatory scroll-smooth touch-pan-x"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {TRUSTPILOT_REVIEWS.map((review, i) => (
                <div
                  key={`mobile-${i}-${review.name}`}
                  className="snap-center snap-always flex-shrink-0"
                  style={{ width: "calc(100vw - 2.5rem)", maxWidth: "400px" }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs text-center mt-3">Swipe left or right to see more reviews</p>
          </div>

          {/* Desktop: carousel with arrows and sliding track */}
          <div className="flex-1 flex items-stretch gap-4 w-full min-w-0 hidden lg:flex">
            <button
              type="button"
              onClick={goPrev}
              className="flex-shrink-0 self-center w-10 h-10 rounded-lg border-2 border-slate-300 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:border-slate-400 flex items-center justify-center transition-colors z-10"
              aria-label="Previous reviews"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 min-w-0 overflow-hidden">
              <motion.div
                className="flex gap-6"
                style={{ width: "max-content" }}
                animate={{ x: offset }}
                transition={resetting ? { duration: 0 } : { type: "tween", duration: 0.5, ease: "easeInOut" }}
              >
                {loopReviews.map((review, i) => (
                  <ReviewCard
                    key={`desktop-${i}-${review.name}`}
                    review={review}
                    className="w-[280px] xl:w-[320px]"
                  />
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex-shrink-0 self-center w-10 h-10 rounded-full border-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-colors z-10"
              aria-label="Next reviews"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="h-2 bg-[#f59e0b] mt-12" />
    </section>
  );
}
