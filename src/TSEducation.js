const TSEducation = ({ TEducation }) => {
    return (
      <div className="contactInfo education">
        <h3 className="title">TECHNICAL QUALIFICATION </h3>
        <ul>
          {TEducation.map((tedu) => (
            <li key={tedu.TYears}>
              <h5>{tedu.TYears}</h5>
              <h4>{tedu.TDegree}</h4>
              <h4>{tedu.TUniv}</h4>
            </li>
          ))}
        </ul>
      </div>



    );
  };
  
  export default TSEducation;
  