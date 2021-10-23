'use strict';

const UserModel = use('App/Models/User');

class UserRepository{
    async execute(userData) {
        try {
            return await UserModel.create(userData); 
        }
        catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new UserRepository();