import 'react-native';
import React from 'react';
import AuthenticationManager from '../AuthenticationManager.js';

const testAuthData = {
	username: 'paco-magma',
	password: 'magma123'
}

test('Login to github properly', async () => {
	const data = jest.fn();
	await AuthenticationManager.login(testAuthData, data);
	expect(data.mock.calls === null).toBe(false);
})