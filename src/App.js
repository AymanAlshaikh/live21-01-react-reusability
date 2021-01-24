import "./App.css";
import Instructors from "./InstructorsData";
import InstructorTag from "./components/InstructorTag";

const tutors = Instructors.map((tutor) => {
  return (
    <InstructorTag
      key={tutor.id}
      emoju={tutor.emoji}
      name={tutor.name}
      github={tutor.github}
    />
  );
});
const App = () => {
  return (
    <div className="AppWrapper">
      <h2>When in doubt, ask for help!</h2>
      <div>{tutors}</div>
    </div>
  );
};

export default App;
