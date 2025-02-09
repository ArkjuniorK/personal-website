function Bar() {
    return (
        <section
            style={{
                fontFamily: "IBM Plex Mono, monospace",
            }}
            className="z-20 w-full relative bg-transparent text-white/90 animate__animated animate__slideInDown"
        >
            <div className="py-1 px-2 flex content-center">
                <div className="flex-1 flex justify-start">
                    <button
                        type="button"
                        className=""
                    >
                        <span className="font-bold text-xs hidden md:block lg:block">
                            Arkjun Yudistira Pratama
                        </span>
                        <span className="font-bold text-xs block md:hidden lg:hidden">
                            AYP
                        </span>
                    </button>
                </div>
                <div className="md:flex-1 flex justify-start md:justify-center">
                    <a target="_blank" href={window.location + "resume.pdf"}>
                        <button
                            type="button"
                            className=""
                        >
                            <span className="font-bold text-xs">
                                View Resume
                            </span>
                        </button>
                    </a>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="flex w-fit">
                        <a
                            target="_blank"
                            href="mailto:created.arkjuniork@gmail.com"
                        >
                            <button
                                type="button"
                                className="py-1 px-3 text-sm font-bold leading-none"
                            >
                                <i className="fa-solid fa-envelope"></i>
                            </button>
                        </a>
                        <a
                            target="_blank"
                            href="https://medium.com/@arkjuniork.yudistira"
                        >
                            <button
                                type="button"
                                className="py-1 px-3 text-sm font-bold leading-none"
                            >
                                <i className="fa-brands fa-medium"></i>
                            </button>
                        </a>

                        <a target="_blank" href="https://github.com/ArkjuniorK">
                            <button
                                type="button"
                                className="py-1 px-3 text-sm font-bold leading-none"
                            >
                                <i className="fa-brands fa-github"></i>
                            </button>
                        </a>
                        <a
                            target="_blank"
                            href="https://linkedin.com/in/Arkjuniork"
                        >
                            <button
                                type="button"
                                className="py-1 px-3 text-sm font-bold leading-none"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bar;
