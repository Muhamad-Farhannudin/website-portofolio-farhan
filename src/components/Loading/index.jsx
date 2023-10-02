import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Tambahkan animasi loading di sini */}
      <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
        </circle>
        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
        </circle>
        <circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
          <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
        </circle>
      </svg>
    </div>
  );
};

export default LoadingAnimation;
