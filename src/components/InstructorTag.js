const InstructorTag = (props) => {
  // Create the InstructorTag component here

  return (
    <div>
      <span>{props.emoji}</span>

      <span>{props.name}</span>
      <span>{props.github}</span>
    </div>
  );
};

export default InstructorTag;
