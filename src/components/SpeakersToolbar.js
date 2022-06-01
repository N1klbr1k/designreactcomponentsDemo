const SpeakersToolbar = ({
  theme,
  setTheme,
  showSessions,
  setShowSessions,
}) => {
  return (
    <section className="toolbar dark-theme">
      <div className="container">
        <div className="justify-content-between">
          {" "}
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(e) => setShowSessions(e.target.checked)}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-comumn flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <option value="light">light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeakersToolbar;
