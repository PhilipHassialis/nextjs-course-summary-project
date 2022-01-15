const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, description, address } = data;
  }
};

export default handler;
