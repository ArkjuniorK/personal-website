function Bar() {
  return (
    <section className="z-20 w-full relative text-white/90 animate__animated animate__slideInDown">
      <div className="py-1 px-2 flex justify-between content-center">
        <button
          type="button"
          className="hover:backdrop-blur-xl bg-dark rounded-2xl py-0 px-3 hover:bg-black/20 dark:hover:bg-darker"
        >
          <span className="font-sans font-bold text-sm hidden md:block lg:block">
            Arkjun Yudistira Pratama
          </span>
          <span className="font-sans font-bold text-sm block md:hidden lg:hidden">AYP</span>
        </button>
        <div className="flex bg-dark rounded-2xl">
          <a target="_blank" href="https://medium.com/@arkjuniork.yudistira">
            <button
              type="button"
              className="hover:backdrop-blur-xl rounded-2xl py-1 px-3 text-sm font-bold leading-none hover:bg-black/20 dark:hover:bg-white/10"
            >
              <i className="iconoir-medium"></i>
            </button>
          </a>
          <a target="_blank" href="mailto:created.arkjuniork@gmail.com">
            <button
              type="button"
              className="hover:backdrop-blur-xl rounded-2xl py-1 px-3 text-sm font-bold leading-none hover:bg-black/20 dark:hover:bg-white/10"
            >
              <i className="iconoir-mail"></i>
            </button>
          </a>
          <a target="_blank" href="https://github.com/ArkjuniorK">
            <button
              type="button"
              className="hover:backdrop-blur-xl rounded-2xl py-1 px-3 text-sm font-bold leading-none hover:bg-black/20 dark:hover:bg-white/10"
            >
              <i className="iconoir-github"></i>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Bar;
