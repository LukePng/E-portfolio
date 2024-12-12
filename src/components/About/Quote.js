import React from "react";

function Quote({ scrollPosition }) {
  return (
    <section id="home" className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">

        <blockquote className="text-5xl italic font-semibold text-gray-100 mb-10">
            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p>"Life is but a mere journey, so go with the flow and see where it leads you"</p>
        </blockquote>

        <p className="text-lg leading-relaxed mb-4">
        This is the quote that I live by, because I believe that life is a fun journey with many wonders waiting to be explored and discovered!
        </p>
      </div>
    </section>
  );
}

export default Quote;

