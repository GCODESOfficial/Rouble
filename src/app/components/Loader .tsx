

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#050316] flex items-center justify-center">
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-1 h-5 bg-[#E32058] animate-wobble`}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
