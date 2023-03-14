export default function Showcase({ name, fontPage }) {
  function handleChange() {
    console.log("like");
  }
  return (
    <section className="showcase-box" id="showcase">
      <img src={fontPage} alt="" />
      <div className="footer">
        <h3>{name}</h3>
        <button className="footer-btn" onClick={handleChange}>
          <p>&hearts;</p>
        </button>
      </div>
    </section>
  );
}
