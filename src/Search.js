export default function Search() {
  return (
    <section className="search-box">
      <h2>Food App</h2>
      <input type="text" id="search" autoComplete="off" />
      <button type="submit" id="search">
        <i className="fa fa-search"></i>
      </button>
    </section>
  );
}
