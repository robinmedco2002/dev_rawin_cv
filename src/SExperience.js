const SExperience = ({ Experience }) => {
    return (
        <div className="">

            <div className="about experience-sec">
                <h2 className="title2">Experience</h2>
                <div className="box">
                    <div className="year_company">
                        {Experience.map((exp) => (
                            <div>
                                <div className="text">
                                    <h4>{exp.Expcomname}</h4>
                                </div>
                                <div>
                                    <h5>{exp.Exppost}</h5>
                                    <h5>({exp.Expyear})</h5>
                                </div>
                                <br/>
                                <p>{exp.Expdetails}</p>
                                <br/>
                                <p>{exp.Point1}</p>
                                <p>{exp.Point1}</p>
                                <p>{exp.Point3}</p>
                                <p>{exp.Point4}</p>
                                <p>{exp.Point5}</p>
                                <p>{exp.Point6}</p>
                                <p>{exp.Point7}</p>
                               <p> <br/> </p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            











        </div>

    );
};

export default SExperience;
