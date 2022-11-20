import { client } from '../../datastore';
import { makeTeamDistribution } from '../../helpers';

export default async function handler(req, res) {
  const { data: students } = await client.from("student").select(`id, name, group (id, name)`);
  const { data: groups } = await client.from("group").select(`id, name`);
  const { data: prompt_companies } = await client.from("prompt_company").select(`id, name`);
  const { data: prompt_ideas } = await client.from("prompt_idea").select(`id, description`);
  const { data: session } = await client.from("random_session").select(`id, is_active`).eq("is_active", true);

  const developerCount = students.filter((stud) => { return stud.group.id === 1 }).length;
  const designerCount = students.filter((stud) => { return stud.group.id === 2 }).length;
  const distribution = makeTeamDistribution(developerCount, designerCount);

  let teams = null;
  if (session) {
    const { data } = await client.from("team").select("*").eq("random_session_id", session.id);
    teams = data;
  }
  res.status(200).json({ students, groups, prompt_companies, prompt_ideas, session, teams, distribution })
}
