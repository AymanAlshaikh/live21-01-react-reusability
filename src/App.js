import "./App.css";
import Instructors from "./InstructorsData";
import InstructorTag from "./components/InstructorTag";
import "./components/styles";
import { AppWrapper } from "./components/styles";
import { ThemeProvider } from "styled-components";

const App = () => {
  const tutors = Instructors.map((tutor) => {
    return (
      <InstructorTag
        key={tutor.id}
        emoji={tutor.emoji}
        name={tutor.name}
        github={tutor.github}
      />
    );
  });
  return (
    <AppWrapper>
      <h2></h2>
      <TagWrapper>{tutors}</TagWrapper>
    </AppWrapper>
  );
};

export default App;
