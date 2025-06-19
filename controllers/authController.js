exports.login = (req, res) => {
    const { role } = req.body;
  
    const dummyToken = "mock-token-123";
    const user = {
      id: Date.now(),
      name: role === "celebrity" ? "Celebrity User" : "Public User",
      role,
    };
  
    res.json({ token: dummyToken, user });
  };
  