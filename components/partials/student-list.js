export default function StudentList({
  groups,
  students,
  currentTeamMembers,
  assignedStudents,
  showAnimation,
  isReplica = false,
}) {
  const currentTeamSelected = currentTeamMembers.length > 0;
  console.log(isReplica);
  return (
    <div className="row">
      {groups.map((group) => {
        return (
          <div key={group.id} className="item students">
            {!isReplica && (
              <h1 className="content group-title">{group.name}</h1>
            )}
            <div className="animationBlock">
              <div
                className={`row ${showAnimation ? "showAnimation" : ""} ${
                  isReplica ? "animationDelay" : ""
                }`}
              >
                {students
                  .filter((student) => student.group.id === group.id)
                  .map((student) => {
                    const studentInCurrentTeam = currentTeamMembers.includes(
                      student.id
                    );
                    const studentHide =
                      currentTeamSelected && !studentInCurrentTeam;
                    const studentHasBeenAssigned = assignedStudents.includes(
                      student.id
                    );
                    let className = "item";
                    if (studentHide) {
                      className = `${className} hide`;
                    }
                    if (studentInCurrentTeam) {
                      className = `${className} current-team-member`;
                    }
                    if (studentHasBeenAssigned) {
                      className = `${className} assigned-student`;
                    }
                    return (
                      <div key={student.id} className={className}>
                        <div className="content">{student.name}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
