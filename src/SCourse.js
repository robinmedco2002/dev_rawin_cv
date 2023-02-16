const SCourse = ({ Course }) => {
    return (
      <div className="contactInfo language">
        <h3 className="title">PROFESSIONAL EXPERTISE </h3>
        <ul>
          {Course.map((cors) => (
            <li key={cors.Name}>
              <span className="text">{cors.Name}</span>
              <span className="percent">
                <div style={{ width: cors.Mark + "%" }}></div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SCourse;
  