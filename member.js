function skillsMember() {
  return {
    name: "skills",
    description: "A member of the skills team",
    skills: ["JavaScript", "Node.js", "React"],
    experience: 5,
    getDetails: function() {
      return `${this.name} has ${this.experience} years of experience in ${this.skills.join(", ")}.`;
    }
  };
}