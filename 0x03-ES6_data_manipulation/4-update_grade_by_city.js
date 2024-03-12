const updateStudentGradeByCity = (getListStudents, citys, newGrades) => {
  const studentFilter = getListStudents.filter((student) => student.location === citys);

  const updatedStudents = studentFilter.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // Create a new object or make a shallow copy of student to avoid modifying the original object
    const updatedStudent = { ...student };

    // Update the student's grade property based on the matching grade
    updatedStudent.grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return updatedStudent;
  });

  return updatedStudents;
};

export default updateStudentGradeByCity;
