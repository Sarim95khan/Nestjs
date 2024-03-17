"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolvoer = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../models/user.model");
const mock_user_1 = require("../../mocksData/mock-user");
const user_setting_model_1 = require("../models/user-setting.model");
const mock_user_settings_1 = require("../../mocksData/mock-user-settings");
const user_dto_1 = require("../dto/user.dto");
let UserResolvoer = class UserResolvoer {
    getUsers() {
        return mock_user_1.mockUsers;
    }
    getUserById(id) {
        return mock_user_1.mockUsers.find(user => user.id === id);
    }
    getSetting(user) {
        console.log(user);
        return mock_user_settings_1.mockUserSettings.find(setting => setting.userId === user.id);
    }
    createUser(createUser) {
        const { username, firstname, email, password } = createUser;
        const newUser = {
            id: mock_user_1.mockUsers.length + 1, username, firstname, email, password,
        };
        mock_user_1.mockUsers.push(newUser);
        return newUser;
    }
};
exports.UserResolvoer = UserResolvoer;
__decorate([
    (0, graphql_1.Query)(returns => [user_model_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolvoer.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserResolvoer.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.ResolveField)((returns) => user_setting_model_1.UserSettings, { nullable: true, name: 'settings' }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", void 0)
], UserResolvoer.prototype, "getSetting", null);
__decorate([
    (0, graphql_1.Mutation)(returns => user_model_1.User),
    __param(0, (0, graphql_1.Args)('createUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserResolvoer.prototype, "createUser", null);
exports.UserResolvoer = UserResolvoer = __decorate([
    (0, graphql_1.Resolver)((of) => user_model_1.User)
], UserResolvoer);
//# sourceMappingURL=user.resolver.js.map