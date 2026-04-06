export default function Header() {
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <header className="w-full bg-paper pt-8 pb-4 px-6 md:px-12 flex flex-col items-center relative z-50">
      <div className="w-full flex justify-between items-end border-b-2 border-ink pb-2 mb-4 text-xs md:text-sm font-serif uppercase tracking-widest font-bold">
        <span>Vol. I — No. 1</span>
        <span className="text-center hidden md:block">The Portfolio Edition</span>
        <span>{date}</span>
      </div>
      <h1 className="text-[clamp(2.5rem,10vw,7.5rem)] font-serif font-black uppercase tracking-tight leading-none text-center mb-4 break-words">
        Aman Verma
      </h1>
      <div className="w-full flex justify-between items-center border-t-2 border-b-4 border-ink py-2 text-xs md:text-sm uppercase tracking-widest font-bold">
        <span>New York, NY</span>
        <span className="hidden md:block">Design & AI Content</span>
        <span>25 Cents</span>
      </div>
    </header>
  );
}
