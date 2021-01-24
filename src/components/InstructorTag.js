const InstructorTag = (props) => {
  // Create the InstructorTag component here

  return (
    <div>
      <span>{props.Instructors.emoji}</span>
      <span>{props.Instructors.name}</span>
      <span>{props.Instructors.github}</span>
    </div>
  );
};

export default InstructorTag;
