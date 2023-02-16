const SExpertise = ({ Expertise }) => {
    return (
      <div className="contactInfo language">
        <h3 className="title">AREAS OF EXPERTISE  </h3>
        <ul>
          {Expertise.map((expert) => (
            <li key={expert.Name}>
              <span className="text">{expert.Name}</span>
             
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SExpertise;
  