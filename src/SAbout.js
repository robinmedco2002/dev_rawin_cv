const SAbout = ({ About }) => {
    return (
      <div className="contactInfo language">
        <h3 className="title">PERSONAL INFORMATION </h3>
        <ul>
          {About.map((abt) => (
            <li key={abt.Title}>
            
              <span className="text">
              <span className="title4">{abt.Title}</span>
              </span>
             
              <span className="text">{abt.Text}</span>
            </li>
            

            
          ))}
        </ul>
      </div>
    );
  };
  
  export default SAbout;
  