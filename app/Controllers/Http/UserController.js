'use strict'

const UserService = use('App/Services/UserService');

class UserController {
    async store({ request, response }) {
        try {
            const data = request.only([
                'username',
                'email',
                'password'
            ]);

            const { username, email } = await UserService.handle(data);

            response.status(201);
            return { username: username, email: email };
        }
        catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async login ({ auth, request }) {
        const { email, password } = request.all()
        return await auth.attempt(email, password)
    }
}

module.exports = UserController;