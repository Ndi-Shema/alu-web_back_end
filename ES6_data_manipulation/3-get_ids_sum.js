export default function getStudentIdsSum(students) {
  return students.reduce((sumation, student) => sumation + student.id, 0);
}
