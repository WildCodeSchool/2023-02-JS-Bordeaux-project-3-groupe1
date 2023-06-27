import { useEffect, useState } from "react";
import { fetcher } from "../../services/api";
import student from "../../assets/student.png";
import starGrey from "../../assets/starGrey.png";

function ListTutorials() {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetcher("tutorials")
      .then((data) => {
        setTutorials(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container-listTutorials">
      <ul className="container-listTutorials-preview">
        {tutorials.map((item) => (
          <li key={item.id}>
            {item?.level === 1 ? (
              <div className="container-icon">
                <div className="icon-preview-tutorial">
                  <div className="icon-preview-tutorial-star">
                    <img src={starGrey} alt="starGrey" />
                  </div>
                  <img src={student} alt="student" />
                </div>
              </div>
            ) : (
              <div className="container-icon">
                <div className="icon-preview-tutorial">
                  <div className="icon-preview-tutorial-star">
                    <img src={starGrey} alt="starGrey" />
                    <img src={starGrey} alt="starGrey" />
                  </div>
                  <img src={student} alt="student" />
                </div>
              </div>
            )}
            <div className="container-selectTutorial-tutorialName">
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTutorials;
