import SelectConcept from "./components/screens/select-concept";
import SelectStudents from "./components/screens/select-students";
import ShowStudents from "./components/screens/show-students";
import ShowTeams from "./components/screens/show-teams";
import Start from "./components/screens/start";
import { STATE_DESCRIPTORS } from "./config";

const randomSorter = () => 0.5 - Math.random();

function selectDesigners(ids, assignedStudents) {
  // TODO: we will need custom select logic that is designer specific
  return ids.filter(id => !assignedStudents.includes(id)).sort(randomSorter).slice(0, 2);
}

function selectDevelopers(ids, assignedStudents) {
  // TODO: we will need custom select logic that is developer specific
  return ids.filter(id => !assignedStudents.includes(id)).sort(randomSorter).slice(0, 2);
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

export function selectStudents(students, assignedStudents) {
  const groupedStudentIds = groupStudentIds(students);
  return [...selectDevelopers(groupedStudentIds.get(1), assignedStudents), ...selectDesigners(groupedStudentIds.get(2), assignedStudents)]
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