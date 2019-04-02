class Github {

    constructor() {
        this.cliend_id = '78bd9c0c881e7813b9f4';
        this.client_secret = 'd231a8a90ba01a700666bafc8fcd39170cd70ac1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }

    }

}