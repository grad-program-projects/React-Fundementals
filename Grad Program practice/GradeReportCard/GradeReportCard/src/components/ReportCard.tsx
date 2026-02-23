

interface Student{
  name: string;
  grade: number;
}

interface GradeInfo{
  gradeLabel: string;
  className: string;
}

function GetGrade(grade:number): GradeInfo{
  switch (true) { //meaning first instane that returns true 
    case grade >=80:
      return{gradeLabel: 'A',className: 'PassA'}

      break;
  case (grade >=70 && grade<=79 ):
      return{gradeLabel: 'B',className: 'PassB'}
      break;
  case (grade >= 60 && grade <= 69):
      return{gradeLabel: 'C',className: 'PassC'}
      break;
  case (grade >= 50 && grade <= 59):
    return{gradeLabel: 'D',className: 'PassD'}
      break;
  
    default:
    return{gradeLabel: 'Failed',className: 'Fail'}
      break;
  }
}

interface ReportCardProp{
  students: Student[];
}

export default function ReportCard ({students}:ReportCardProp){
  //students.sort((a,b) => b.grade -a.grade); - mutating array, not allowed, createa copy instead 
  //const sorted= [...students].sort((a,b) => b.grade - a.grade);

  const item = students.map(student => {
    const gradeInfo = GetGrade(student.grade)
    return <li className= {gradeInfo.className}>
      Name: {student.name} - Grade: {student.grade} - {gradeInfo.gradeLabel}
    </li>
});
return <ul>{item}</ul>

}