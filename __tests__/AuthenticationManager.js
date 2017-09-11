import 'react-native';
import React from 'react';
import AuthenticationManager from '../AuthenticationManager.js';

const testAuthData = {
	username: 'paco-magma',
	password: 'magma123'
}

test('Login to github properly', async () => {
	const data = jest.fn();
	fetch.mockResponse(JSON.stringify({
		login: "paco-magma",
		id: 31866860,
		avatar_url: "https://avatars3.githubusercontent.com/u/31866860?v=4",
		gravatar_id: "",
		url: "https://api.github.com/users/paco-magma",
		html_url: "https://github.com/paco-magma",
		followers_url: "https://api.github.com/users/paco-magma/followers",
		following_url: "https://api.github.com/users/paco-magma/following{/other_user}",
		gists_url: "https://api.github.com/users/paco-magma/gists{/gist_id}",
		starred_url: "https://api.github.com/users/paco-magma/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/paco-magma/subscriptions",
		organizations_url: "https://api.github.com/users/paco-magma/orgs",
		repos_url: "https://api.github.com/users/paco-magma/repos",
		events_url: "https://api.github.com/users/paco-magma/events{/privacy}",
		received_events_url: "https://api.github.com/users/paco-magma/received_events",
		type: "User",
		site_admin: false,
		name: null,
		company: null,
		blog: "",
		location: null,
		email: null,
		hireable: null,
		bio: null,
		public_repos: 0,
		public_gists: 0,
		followers: 0,
		following: 0,
		created_at: "2017-09-11T21:12:11Z",
		updated_at: "2017-09-11T21:12:11Z",
		private_gists: 0,
		total_private_repos: 0,
		owned_private_repos: 0,
		disk_usage: 0,
		collaborators: 0,
		two_factor_authentication: false
	}))
	await AuthenticationManager.login(testAuthData, data);
	console.log(data)
	expect(data.mock !== null).toBe(true);
})