const students = [
  {
    name: "joko",
    email: "jokowiw@email.co.id",
    age: new Date(1980),
    score: 75,
  },
  {
    name: "prabowo",
    email: "prabowow@email.co.id",
    age: new Date(1970),
    score: 85,
  },
  {
    name: "ahok",
    email: "ahokahok@email.co.id",
    age: new Date(19880),
    score: 90,
  },
];

function calculateDate(date: Date) {
  const today = new Date();

  return today.getFullYear() - date.getFullYear();
}

function calculateStudentData(students: any[]) {
  let scores = [];
  let ages = [];

  for (let i = 0; i < students.length; i++) {
    scores.push(students[i].score);
    ages.push(calculateDate(students[i].age));
  }
  let totalScores = 0;
  let totalAges = 0;

  for (let i = 0; i < scores.length; i++) {
    totalScores += scores[i];
  }

  for (let i = 0; i < ages.length; i++) {
    totalAges += ages[i];
  }

  let scoreResult = {
    highest: Math.max(...scores),
    lowest: Math.min(...scores),
    average: totalScores / scores.length,
  };
  let ageResult = {
    highest: Math.max(...ages),
    lowest: Math.min(...ages),
    average: totalAges / ages.length,
  };

  return {
    scores: scoreResult,
    ages: ageResult,
  };
}

console.log(calculateStudentData(students));
