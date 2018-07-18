const axios = require('axios');
const querystring = require('querystring');

class FootballData {
    constructor(token) {
        this.instance = axios.create({
            baseURL: 'http://api.football-data.org/v2/',
             timeout: 1000,
            headers: { 'X-Auth-Token': token }
        });
    }

    competitions({area} = {}) {
        return this.instance.get(`/competitions?${querystring.stringify({areas: area})}`)
    }

    competition(competitionId) {
        return this.instance.get(`/competitions/${competitionId}`)
    }

    teams(competitionId, {stage} = {}) {
        return this.instance.get(`/competitions/${competitionId}/teams?${querystring.stringify({stage})}`)
    }

    standings(competitionId) {
        return this.instance.get(`/competitions/${competitionId}/standings`)
    }
    
    competitionMatches(competitionId, {dateFrom, dateTo, stage, status, matchday, group} = {}) {
        return this.instance.get(`/competitions/${competitionId}/matches?${querystring.stringify({dateFrom, dateTo, stage, status, matchday, group})}`)
    }

    matches({competitions, dateFrom, dateTo, status} = {}) {
        return this.instance.get(`/matches?${querystring.stringify({competitions, dateFrom, dateTo, status})}`)
    }

    match(id) {
        return this.instance.get(`/matches/${id}`)
    }

    teamMatches(id,{dateFrom, dateTo, status, venue} = {}) {
        return this.instance.get(`/teams/${id}/matches${querystring.stringify({dateFrom, dateTo, status, venue})}`)
    }

    team(id) {
        return this.instance.get(`/teams/${id}`)
    }

    areas(id) {
        return this.instance.get(`/areas/${id}`)
    }
}

module.exports = FootballData;