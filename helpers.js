import SelectConcept from "./components/screens/select-concept";
import SelectStudents from "./components/screens/select-students";
import ShowStudents from "./components/screens/show-students";
import ShowTeams from "./components/screens/show-teams";
import Start from "./components/screens/start";
import { STATE_DESCRIPTORS } from "./config";

const randomSorter = () => 0.5 - Math.random();

// https://sebhastian.com/fisher-yates-shuffle-javascript/
function shuffle(arr) {
  let i = arr.length;
  while (--i > 0) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
  }
  return arr;
}

export function makeTeamDistribution(developerCount, designerCount) {
  // this is not a generic algorithm to create team shapes!
  // Assumptions:
  // - ideal team is 2 x 2
  // - always want 2+ devs in a team
  // - there are less devs than designers
  const developersIsEven = developerCount % 2 === 0;
  const teamCount = developersIsEven ? developerCount / 2 : (developerCount - 1) / 2;
  const developerTeamTarget = 2;
  const designerTeamTarget = Math.floor(designerCount / teamCount);
  const designerTeamExtraCount = designerCount - (teamCount * designerTeamTarget);
  const distribution = Array(teamCount).fill({}).map((t, idx, arr) => {
    // standard team
    const team = { developerCount: developerTeamTarget, designerCount: designerTeamTarget };
    // developer distribution maybe adjusted
    if (idx + 1 === arr.length && !developersIsEven) team.developerCount = developerTeamTarget + 1
    // designer distribution maybe adjusted
    if (idx + 1 > (arr.length - designerTeamExtraCount)) team.designerCount = designerTeamTarget + 1
    return team;
  });
  return distribution;
}

function selectDesigners(ids, quantity, assignedStudents) {
  return shuffle(ids.filter(id => !assignedStudents.includes(id))).slice(0, quantity);
}

function selectDevelopers(ids, quantity, assignedStudents) {
  return shuffle(ids.filter(id => !assignedStudents.includes(id))).slice(0, quantity);
}

export function makeConcept(companies, ideas) {
  const name = companies.map(c => c.name).sort(randomSorter).pop();
  const idea = ideas.map(i => i.description).sort(randomSorter).pop();
  return { name, idea };
}

function groupStudentIds(students) {
  return students.reduce((accumulator, current) => {
    if (!accumulator.has(current.group.id)) { accumulator.set(current.group.id, []) };
    accumulator.get(current.group.id).push(current.id);
    return accumulator;
  }, new Map());
}

export function selectStudents(students, assignedStudents, teamDistribution) {
  const groupedStudentIds = groupStudentIds(students);
  return [...selectDevelopers(groupedStudentIds.get(1), teamDistribution.developerCount, assignedStudents), ...selectDesigners(groupedStudentIds.get(2), teamDistribution.designerCount, assignedStudents)]
}

export function getCurrentComponent(currentStateId, session, data, teams, setTeams, assignedStudents, setAssignedStudents, currentTeamMembers, setCurrentTeamMembers, transitionToStateFn) {

  const stateDescriptor = STATE_DESCRIPTORS[currentStateId];

  switch (currentStateId) {
    case 0: {
      return <Start session={session} data={data} teams={teams} setTeams={setTeams} assignedStudents={assignedStudents} setAssignedStudents={setAssignedStudents} currentTeamMembers={currentTeamMembers} setCurrentTeamMembers={setCurrentTeamMembers} stateDescriptor={stateDescriptor} transitionToStateFn={transitionToStateFn} />;
    }
    case 1: {
      return <ShowStudents session={session} data={data} teams={teams} setTeams={setTeams} assignedStudents={assignedStudents} setAssignedStudents={setAssignedStudents} currentTeamMembers={currentTeamMembers} setCurrentTeamMembers={setCurrentTeamMembers} stateDescriptor={stateDescriptor} transitionToStateFn={transitionToStateFn} />
    }
    case 2: {
      return <SelectStudents session={session} data={data} teams={teams} setTeams={setTeams} assignedStudents={assignedStudents} setAssignedStudents={setAssignedStudents} currentTeamMembers={currentTeamMembers} setCurrentTeamMembers={setCurrentTeamMembers} stateDescriptor={stateDescriptor} transitionToStateFn={transitionToStateFn} />
    }
    case 3: {
      return <SelectConcept session={session} data={data} teams={teams} setTeams={setTeams} assignedStudents={assignedStudents} setAssignedStudents={setAssignedStudents} currentTeamMembers={currentTeamMembers} setCurrentTeamMembers={setCurrentTeamMembers} stateDescriptor={stateDescriptor} transitionToStateFn={transitionToStateFn} />
    }
    case 4: {
      return <ShowTeams session={session} data={data} teams={teams} setTeams={setTeams} assignedStudents={assignedStudents} setAssignedStudents={setAssignedStudents} currentTeamMembers={currentTeamMembers} setCurrentTeamMembers={setCurrentTeamMembers} stateDescriptor={stateDescriptor} transitionToStateFn={transitionToStateFn} />
    }
    default: {
      return <Message content="Something went wrong. Reload the application to start again." />;
    }
  }
}