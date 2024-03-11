const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return 0; // Return 0 for an empty array or non-array input
  }

  return (students.reduce((accumulator, student) => accumulator + student.id, 0));
};

export default getStudentIdsSum;
