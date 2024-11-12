import Team from "../model/teamModel.js";

export const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.json(teams);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const getTeamsById = async (req, res) => {
    try {
        const team = await Team.findAll({
            where: { id: req.params.id }
        });
        res.json(team[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}
export const createTeam = async (req, res) => {
    try {
        await Team.create(req.body);
        res.json({message: "Team Created"});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const updateTeam = async (req, res) => {
    try {
        await Team.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({message: "Team Updated"});
    } catch (error) {
        res.json({message: error.message});
    }
}
export const deleteTeam = async (req, res) => {
    try {
        await Team.destroy({
            where: { id: req.params.id }
        });
        res.json({message: "Team Deleted"});
    } catch (error) {
        res.json({message: error.message});
    }
}