const universities = [
  {
    value: "National University of Singapore",
    group: "sg",
    label: "National University of Singapore",
  },
  {
    value: "University of Pittsburgh - Pittsburgh",
    group: "us",
    label: "University of Pittsburgh - Pittsburgh",
  },
  {
    value: "University of Michigan - Ann Arbor",
    group: "us",
    label: "University of Michigan - Ann Arbor",
  },
];

const uniGroups = [
  { value: "sg", label: "Singapore" },
  { value: "us", label: "United States (USA)" },
];

const groupedUnis = uniGroups.map(({ value, label }) => {
  return {
    label,
    options: universities.filter(({ group }) => group === value),
  };
});

export default groupedUnis;
