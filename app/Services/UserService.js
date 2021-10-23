'use strict';

const UserRepository = use('App/Repositories/UserRepository');

class UserService {
    async handle(userData) {
        if (await this._validateEmail(userData.email)) {
            return await UserRepository.execute(userData);
        }

        throw new Error('Invalid email, please enter a valid one!');
    }

    async _validateEmail (email){ 
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
}

module.exports = new UserService();