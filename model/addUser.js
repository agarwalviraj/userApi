function makeUser(req) {
  return {
    name: req.body.name,
    groupName: req.body.grN,
    role: req.body.role,
    joined: req.body.join,
    city: req.body.city,
    about: req.body.abt,
    level: req.body.lvl,
    points: req.body.pts,
    awards: req.body.awd,
    matches: req.body.matches,
    pals: req.body.pals,
  };
}

module.exports = makeUser;
