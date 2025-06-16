export default function SuccessMessagePopup({message}) {
    return (

<div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-md flex items-start" role="alert">
  <div className="mr-2">
    <svg className="w-5 h-5 mt-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414L9 13.414l4.707-4.707z" clip-rule="evenodd" />
    </svg>
  </div>
  <div>
    <strong className="font-bold">Success!</strong>
    <span className="block sm:inline">{message}.</span>
  </div>
  <button onClick={()=>{this.parentElement.remove()}} className="ml-4 text-green-700 hover:text-green-900">
    ✕
  </button>
</div>);
}
