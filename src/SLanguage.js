const SLanguage = ({ Language }) => {
    return (
      <div className="contactInfo language">
        <h3 className="title">LANGUAGES </h3>
        <ul>
          {Language.map((lang) => (
            <li key={lang.Name}>
              <span className="text">{lang.Name}</span>
             
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SLanguage;
  