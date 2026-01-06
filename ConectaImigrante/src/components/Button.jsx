export default function Button({ children, onClick, color = "bg-blue-600", className = "" }) {
  return (
    <button 
      onClick={onClick}
      // Combinamos as classes padrão com a cor e as classes extras passadas por quem usa o componente
      className={`${color} ${className} text-white font-semibold py-2 px-6 shadow-md hover:opacity-90 transition-all active:scale-95 cursor-pointer`}
    >
      {children}
    </button>
  );
}