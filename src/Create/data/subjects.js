const subjects = [
  {
    value: "Accounting and Finance",
    group: "biz-fin",
    label: "Accounting and Finance",
  },
  {
    value: "Computer Science",
    group: "ds-cs",
    label: "Computer Science",
  },
  {
    value: "Aerospace Engineering",
    group: "eng",
    label: "Aerospace Engineering",
  },
];

const subjectGroups = [
  { value: "biz-fin", label: "Business and Finance" },
  { value: "ds-cs", label: "Computer and Data Science" },
  { value: "eng", label: "Engineering" },
];

const groupedSubjects = subjectGroups.map(({ value, label }) => {
  return {
    label,
    options: subjects.filter(({ group }) => group === value),
  };
});

export default groupedSubjects;
