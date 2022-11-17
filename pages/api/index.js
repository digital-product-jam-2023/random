export default async function handler(req, res) {
  const documentation = {
    endpoints: {
      "/data": {
        methods: ["GET"],
        description: "Get the raw data elements for a random session."
      },
      "/sessions": {
        methods: ["GET", "POST"],
        description: "Get or create a random session identifier."
      },
      "/teams": {
        methods: ["GET", "POST"],
        description: "Get or create teams for a session."
      }
    }
  }
  res.status(200).json(documentation);
}
