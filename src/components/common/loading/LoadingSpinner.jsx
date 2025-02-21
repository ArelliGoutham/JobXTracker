const LoadingSpinner = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Spinner */}
      <div className="relative z-10">
        <div
          className="w-16 h-16 border-4 border-white border-t-orange-500 border-r-black rounded-full animate-spin"
          aria-label="Loading"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
