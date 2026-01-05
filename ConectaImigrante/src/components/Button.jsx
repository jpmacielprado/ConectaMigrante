export default function Button({ children, onClick, color = "bg-blue-600" }) {
  return (
    <button 
      onClick={onClick}
      className={`${color} text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-all active:scale-95`}
    >
      {children}
    </button>
  );
}