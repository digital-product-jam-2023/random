import { useState } from "react";
import Message from "../components/partials/message";
import { getCurrentComponent } from "../helpers";
import { useData, useSession } from "../hooks/data";

export default function IndexPage() {

  const [currentStateId, transitionToStateFn] = useState(0);

  const { data, isLoading: dataLoading, isError: dataError } = useData();
  const { data: session, isLoading: sessionLoading, isError: sessionError } = useSession();
  const [teams, setTeams] = useState([]);
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [currentTeamMembers, setCurrentTeamMembers] = useState([]);

  if (dataLoading) return <Message content="Loading..." />
  if (dataError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  return getCurrentComponent(
    currentStateId,
    session,
    data,
    teams,
    setTeams,
    assignedStudents,
    setAssignedStudents,
    currentTeamMembers,
    setCurrentTeamMembers,
    transitionToStateFn
  );
}
