export default function updateStudentGradeByCity(students, city, grad) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const grade = grad.find((grade) => grade.studentId === student.id);
      return { ...student, grade: grade ? grade.grade : 'N/A' };
    });
}
