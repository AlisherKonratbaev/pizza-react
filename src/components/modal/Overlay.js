

function Overlay() {
    const close = (e) => {
        e.target.classList.remove("show");
        document.querySelector(".modal").classList.remove("show");
    }
    return (
        <div onClick={close} className="overlay"></div>
    )
}

export default Overlay;