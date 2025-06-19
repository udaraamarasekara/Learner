export default function ErrorMessagePopup({ message, hideErrorPopup }) {
  console.log(message);
  return (
    <div className="fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-lg shadow-md flex items-start" role="alert">
      <div className="mr-2">
        <svg className="w-5 h-5 mt-1 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.6c.75 1.336-.213 3.001-1.742 3.001H3.48c-1.529 0-2.492-1.665-1.742-3.001l6.519-11.6zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V8a1 1 0 112 0v2a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <button
        onClick={(e) => hideErrorPopup()}
        className="ml-4 text-red-800 hover:text-red-900"
      >
        ✕
      </button>
    </div>
  );
}

