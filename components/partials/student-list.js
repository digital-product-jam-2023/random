export default function StudentList({
  groups,
  students,
  currentTeamMembers,
  assignedStudents,
  showAnimation,
  isReplica = false,
}) {
  const currentTeamSelected = currentTeamMembers.length > 0;
  return (
    <div className="row">
      {groups.map((group) => {
        return (
          <div key={group.id} className="item students">
            {!isReplica && (
              <h1
                className={`content group-title ${showAnimation ? "hide" : ""}`} //hide group titles if animation is running to prevent overlay
              >
                {group.name}
              </h1>
            )}
            <div className="animation-block">
              <div
                className={`row ${showAnimation ? "show-animation" : ""} ${
                  isReplica ? "animation-delay" : ""
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
