/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app.module.ts":
/*!************************************!*\
  !*** ./apps/api/src/app.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const ormconfig_1 = __importDefault(__webpack_require__(/*! ../../../ormconfig */ "./ormconfig.ts"));
const auth_1 = __webpack_require__(/*! ./auth */ "./apps/api/src/auth/index.ts");
const medication_1 = __webpack_require__(/*! ./medication */ "./apps/api/src/medication/index.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            auth_1.AuthModule,
            medication_1.MedicationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./apps/api/src/auth/auth.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! config */ "config");
const auth_1 = __webpack_require__(/*! @libs/auth */ "./libs/auth/src/index.ts");
const Controllers = __importStar(__webpack_require__(/*! ./controllers */ "./apps/api/src/auth/controllers/index.ts"));
const Services = __importStar(__webpack_require__(/*! ./services */ "./apps/api/src/auth/services/index.ts"));
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            auth_1.AuthLibModule,
            jwt_1.JwtModule.register({
                secret: config_1.JWT.SECRET_KEY,
            }),
        ],
        controllers: Object.values(Controllers),
        providers: Object.values(Services),
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/auth/controllers/auth.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/auth/controllers/auth.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
const auth_1 = __webpack_require__(/*! @libs/auth */ "./libs/auth/src/index.ts");
const services_1 = __webpack_require__(/*! ../services */ "./apps/api/src/auth/services/index.ts");
let AuthController = class AuthController {
    constructor(authService, jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async me({ user }) {
        return new auth_1.MeResponseDTO(await this.authService.getMe(user.id));
    }
    async signUp(signUpBodyDTO, res) {
        await this.authService.signUp(signUpBodyDTO);
        const { email, password } = signUpBodyDTO;
        const { id } = await this.authService.signIn(email, password);
        const accessToken = this.jwtService.sign({ id });
        res.cookie(constants_1.COOKIE.ACCESS_TOKEN, accessToken, Object.assign({ expires: constants_1.COOKIE_EXPIRES() }, constants_1.COOKIE_SECURE_OPTIONS));
        res.send(new auth_1.SignUpResponseDTO(accessToken));
    }
    async signIn({ email, password }, res) {
        const { id } = await this.authService.signIn(email, password);
        const accessToken = this.jwtService.sign({ id });
        res.cookie(constants_1.COOKIE.ACCESS_TOKEN, accessToken, Object.assign({ expires: constants_1.COOKIE_EXPIRES() }, constants_1.COOKIE_SECURE_OPTIONS));
        res.send(new auth_1.SignInResponseDTO(accessToken));
    }
    logOut(res) {
        res.clearCookie(constants_1.COOKIE.ACCESS_TOKEN, constants_1.COOKIE_SECURE_OPTIONS);
        res.send();
    }
};
__decorate([
    common_1.Get('me'),
    auth_1.Auth(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: auth_1.MeResponseDTO }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.RequestWithUser !== "undefined" && auth_1.RequestWithUser) === "function" ? _a : Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "me", null);
__decorate([
    common_1.Post('sign-up'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: auth_1.SignUpResponseDTO }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof auth_1.SignUpBodyDTO !== "undefined" && auth_1.SignUpBodyDTO) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "signUp", null);
__decorate([
    common_1.Post('sign-in'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: auth_1.SignInResponseDTO }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof auth_1.SignInBodyDTO !== "undefined" && auth_1.SignInBodyDTO) === "function" ? _f : Object, typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], AuthController.prototype, "signIn", null);
__decorate([
    common_1.Post('log-out'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logOut", null);
AuthController = __decorate([
    swagger_1.ApiTags('auth'),
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [typeof (_k = typeof services_1.AuthService !== "undefined" && services_1.AuthService) === "function" ? _k : Object, typeof (_l = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _l : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/auth/controllers/index.ts":
/*!************************************************!*\
  !*** ./apps/api/src/auth/controllers/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.controller */ "./apps/api/src/auth/controllers/auth.controller.ts"), exports);


/***/ }),

/***/ "./apps/api/src/auth/index.ts":
/*!************************************!*\
  !*** ./apps/api/src/auth/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.module */ "./apps/api/src/auth/auth.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./services */ "./apps/api/src/auth/services/index.ts"), exports);


/***/ }),

/***/ "./apps/api/src/auth/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/auth/services/auth.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_1 = __webpack_require__(/*! @libs/auth */ "./libs/auth/src/index.ts");
let AuthService = class AuthService {
    constructor(authLibService) {
        this.authLibService = authLibService;
    }
    getMe(id) {
        return this.authLibService.getMe(id);
    }
    signUp(signUpBodyDTO) {
        return this.authLibService.signUp(signUpBodyDTO);
    }
    signIn(email, password) {
        return this.authLibService.signIn(email, password);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/auth/services/index.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/auth/services/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.service */ "./apps/api/src/auth/services/auth.service.ts"), exports);


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const config = __importStar(__webpack_require__(/*! config */ "config"));
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const packageJson = __importStar(__webpack_require__(/*! ../../../package.json */ "./package.json"));
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/api/src/app.module.ts");
async function bootstrap() {
    const port = config.API.PORT;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (config.CORS) {
        const corsOptions = {
            origin: (origin, callback) => {
                callback(null, true);
            },
            credentials: true,
            methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
            headers: ['x-user', 'X-Signature', 'accept', 'content-type', 'authorization'],
        };
        app.use(cors_1.default(corsOptions));
        app.use(cookie_parser_1.default());
    }
    const apiPrefix = 'api/v1';
    app.setGlobalPrefix(apiPrefix);
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector), {
        excludeExtraneousValues: true,
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidUnknownValues: true,
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle(packageJson.name)
        .setDescription(packageJson.description)
        .setVersion(packageJson.version)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(port);
}
bootstrap();


/***/ }),

/***/ "./apps/api/src/medication/constants/index.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/medication/constants/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./medication.constants */ "./apps/api/src/medication/constants/medication.constants.ts"), exports);


/***/ }),

/***/ "./apps/api/src/medication/constants/medication.constants.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/medication/constants/medication.constants.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MEDICATION_LIST_SORT_TYPES = void 0;
var MEDICATION_LIST_SORT_TYPES;
(function (MEDICATION_LIST_SORT_TYPES) {
    MEDICATION_LIST_SORT_TYPES["NAME"] = "name";
    MEDICATION_LIST_SORT_TYPES["CHANGE_DATE"] = "change_date";
})(MEDICATION_LIST_SORT_TYPES = exports.MEDICATION_LIST_SORT_TYPES || (exports.MEDICATION_LIST_SORT_TYPES = {}));


/***/ }),

/***/ "./apps/api/src/medication/controllers/index.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/medication/controllers/index.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./medication.controller */ "./apps/api/src/medication/controllers/medication.controller.ts"), exports);


/***/ }),

/***/ "./apps/api/src/medication/controllers/medication.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/medication/controllers/medication.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_1 = __webpack_require__(/*! @libs/auth */ "./libs/auth/src/index.ts");
const dtos_1 = __webpack_require__(/*! @libs/dtos */ "./libs/dtos/src/index.ts");
const medication_controller_dtos_1 = __webpack_require__(/*! ../dtos/medication.controller.dtos */ "./apps/api/src/medication/dtos/medication.controller.dtos.ts");
const services_1 = __webpack_require__(/*! ../services */ "./apps/api/src/medication/services/index.ts");
let MedicationController = class MedicationController {
    constructor(medicationService) {
        this.medicationService = medicationService;
    }
    async getMedicationList({ user }, query) {
        return new medication_controller_dtos_1.GetMedicationListResponseDTO(await this.medicationService.getMedicationList(user.id, query));
    }
    async createMedication({ user }, body) {
        await this.medicationService.createMedication(user.id, body);
        return new medication_controller_dtos_1.MedicationResponseDTO();
    }
    async updateMedication({ user }, { id }, body) {
        await this.medicationService.updateMedication(user.id, id, body);
        return new medication_controller_dtos_1.MedicationResponseDTO();
    }
};
__decorate([
    common_1.Get(),
    auth_1.Auth(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: medication_controller_dtos_1.GetMedicationListResponseDTO }),
    __param(0, common_1.Req()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.RequestWithUser !== "undefined" && auth_1.RequestWithUser) === "function" ? _a : Object, typeof (_b = typeof medication_controller_dtos_1.GetMedicationListParamsDTO !== "undefined" && medication_controller_dtos_1.GetMedicationListParamsDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], MedicationController.prototype, "getMedicationList", null);
__decorate([
    common_1.Post(),
    auth_1.Auth(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: medication_controller_dtos_1.MedicationResponseDTO }),
    __param(0, common_1.Req()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof auth_1.RequestWithUser !== "undefined" && auth_1.RequestWithUser) === "function" ? _d : Object, typeof (_e = typeof medication_controller_dtos_1.CreateMedicationBodyDTO !== "undefined" && medication_controller_dtos_1.CreateMedicationBodyDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], MedicationController.prototype, "createMedication", null);
__decorate([
    common_1.Patch(':id'),
    auth_1.Auth(),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({ type: medication_controller_dtos_1.MedicationResponseDTO }),
    __param(0, common_1.Req()),
    __param(1, common_1.Param()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof auth_1.RequestWithUser !== "undefined" && auth_1.RequestWithUser) === "function" ? _g : Object, typeof (_h = typeof dtos_1.IdParamDTO !== "undefined" && dtos_1.IdParamDTO) === "function" ? _h : Object, typeof (_j = typeof medication_controller_dtos_1.UpdateMedicationBodyDTO !== "undefined" && medication_controller_dtos_1.UpdateMedicationBodyDTO) === "function" ? _j : Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], MedicationController.prototype, "updateMedication", null);
MedicationController = __decorate([
    swagger_1.ApiTags('medication'),
    common_1.Controller('medication'),
    __metadata("design:paramtypes", [typeof (_l = typeof services_1.MedicationService !== "undefined" && services_1.MedicationService) === "function" ? _l : Object])
], MedicationController);
exports.MedicationController = MedicationController;


/***/ }),

/***/ "./apps/api/src/medication/dtos/medication.controller.dtos.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/medication/dtos/medication.controller.dtos.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMedicationBodyDTO = exports.CreateMedicationBodyDTO = exports.GetMedicationListResponseDTO = exports.MedicationInfo = exports.GetMedicationListParamsDTO = exports.MedicationResponseDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const common_constatns_1 = __webpack_require__(/*! @libs/constants/common.constatns */ "./libs/constants/src/common.constatns.ts");
const dtos_1 = __webpack_require__(/*! @libs/dtos */ "./libs/dtos/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/entities */ "./libs/entities/src/index.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./apps/api/src/medication/constants/index.ts");
class MedicationResponseDTO {
}
exports.MedicationResponseDTO = MedicationResponseDTO;
class GetMedicationListParamsDTO {
    constructor() {
        this.sort = common_constatns_1.SORT_DIRECTION.ASC;
        this.order = constants_1.MEDICATION_LIST_SORT_TYPES.CHANGE_DATE;
    }
}
__decorate([
    swagger_1.ApiProperty({
        required: false,
        default: common_constatns_1.SORT_DIRECTION.ASC,
        enum: Object.values(common_constatns_1.SORT_DIRECTION),
    }),
    class_validator_1.IsEnum(common_constatns_1.SORT_DIRECTION),
    __metadata("design:type", String)
], GetMedicationListParamsDTO.prototype, "sort", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        default: constants_1.MEDICATION_LIST_SORT_TYPES.CHANGE_DATE,
        enum: Object.values(constants_1.MEDICATION_LIST_SORT_TYPES),
    }),
    class_validator_1.IsEnum(constants_1.MEDICATION_LIST_SORT_TYPES),
    __metadata("design:type", String)
], GetMedicationListParamsDTO.prototype, "order", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    class_transformer_1.Transform(({ value }) => value && value.trim()),
    __metadata("design:type", String)
], GetMedicationListParamsDTO.prototype, "search", void 0);
exports.GetMedicationListParamsDTO = GetMedicationListParamsDTO;
class MedicationInfo extends swagger_1.PickType(entities_1.MedicationEntity, ['id', 'name', 'description', 'count', 'destinationCount']) {
}
exports.MedicationInfo = MedicationInfo;
class GetMedicationListResponseDTO extends dtos_1.ConstructableDTO {
}
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty({ isArray: true, type: MedicationInfo }),
    class_transformer_1.Type(() => MedicationInfo),
    __metadata("design:type", Array)
], GetMedicationListResponseDTO.prototype, "items", void 0);
exports.GetMedicationListResponseDTO = GetMedicationListResponseDTO;
class CreateMedicationBodyDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], CreateMedicationBodyDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], CreateMedicationBodyDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsInt(),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateMedicationBodyDTO.prototype, "destinationCount", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsInt(),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreateMedicationBodyDTO.prototype, "count", void 0);
exports.CreateMedicationBodyDTO = CreateMedicationBodyDTO;
class UpdateMedicationBodyDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_transformer_1.Type(() => String),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateMedicationBodyDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    class_transformer_1.Type(() => String),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateMedicationBodyDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsInt(),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateMedicationBodyDTO.prototype, "destinationCount", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsInt(),
    class_validator_1.IsNumber(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateMedicationBodyDTO.prototype, "count", void 0);
exports.UpdateMedicationBodyDTO = UpdateMedicationBodyDTO;


/***/ }),

/***/ "./apps/api/src/medication/index.ts":
/*!******************************************!*\
  !*** ./apps/api/src/medication/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./medication.module */ "./apps/api/src/medication/medication.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./services */ "./apps/api/src/medication/services/index.ts"), exports);


/***/ }),

/***/ "./apps/api/src/medication/medication.module.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/medication/medication.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_1 = __webpack_require__(/*! @libs/auth */ "./libs/auth/src/index.ts");
const Controllers = __importStar(__webpack_require__(/*! ./controllers */ "./apps/api/src/medication/controllers/index.ts"));
const Services = __importStar(__webpack_require__(/*! ./services */ "./apps/api/src/medication/services/index.ts"));
const Repository = __importStar(__webpack_require__(/*! ./repositories */ "./apps/api/src/medication/repositories/index.ts"));
let MedicationModule = class MedicationModule {
};
MedicationModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature(Object.values(Repository)),
            auth_1.AuthLibModule,
        ],
        controllers: Object.values(Controllers),
        providers: Object.values(Services),
    })
], MedicationModule);
exports.MedicationModule = MedicationModule;


/***/ }),

/***/ "./apps/api/src/medication/repositories/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/medication/repositories/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./medication.repository */ "./apps/api/src/medication/repositories/medication.repository.ts"), exports);


/***/ }),

/***/ "./apps/api/src/medication/repositories/medication.repository.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/medication/repositories/medication.repository.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! @libs/entities */ "./libs/entities/src/index.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./apps/api/src/medication/constants/index.ts");
let MedicationRepository = class MedicationRepository extends typeorm_1.Repository {
    getMedicationList(userId, query) {
        const { sort, order, search, } = query;
        const qb = this.createQueryBuilder('m')
            .where('m.userId = :userId', { userId });
        if (search) {
            qb.andWhere('m.name ILIKE :search', { search: this.getSearchString(search) });
        }
        qb.orderBy(this.getMedicationListSortField(order), sort);
        return qb.getMany();
    }
    getSearchString(search) {
        search = search.replace(/%/g, '\\%').replace(/'/g, '\'\'');
        const searchString = `%${search.toLocaleLowerCase()}%`;
        return searchString;
    }
    getMedicationListSortField(order) {
        switch (order) {
            case constants_1.MEDICATION_LIST_SORT_TYPES.NAME:
                return 'm."name"';
            case constants_1.MEDICATION_LIST_SORT_TYPES.CHANGE_DATE:
                return 'm."updatedAt"';
            default:
                return 'm."updatedAt"';
        }
    }
};
MedicationRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.MedicationEntity)
], MedicationRepository);
exports.MedicationRepository = MedicationRepository;


/***/ }),

/***/ "./apps/api/src/medication/services/index.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/medication/services/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./medication.service */ "./apps/api/src/medication/services/medication.service.ts"), exports);


/***/ }),

/***/ "./apps/api/src/medication/services/medication.service.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/medication/services/medication.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
const repositories_1 = __webpack_require__(/*! ../repositories */ "./apps/api/src/medication/repositories/index.ts");
let MedicationService = class MedicationService {
    constructor(medicationRepository) {
        this.medicationRepository = medicationRepository;
    }
    async createMedication(userId, body) {
        await this.medicationRepository.save(Object.assign(Object.assign({}, body), { userId }));
    }
    async updateMedication(userId, medicationId, body) {
        const medication = await this.getMedicationOrFail({ id: medicationId, userId });
        if (body.destinationCount
            && medication.count > body.destinationCount
            || medication.destinationCount < body.count) {
            throw new common_1.BadRequestException([{ field: '', message: constants_1.ERRORS.DESTINATION_LESS_THEN_COUNT }]);
        }
        await this.medicationRepository.update({ id: medication.id }, body);
    }
    async getMedicationList(userId, query) {
        const items = await this.medicationRepository.getMedicationList(userId, query);
        return {
            items,
        };
    }
    async getMedicationOrFail(conditions) {
        const medication = await this.medicationRepository.findOne({ where: conditions });
        if (!medication) {
            throw new common_1.NotFoundException([{ field: '', message: constants_1.ERRORS.MEDICATION_NOT_FOUND }]);
        }
        return medication;
    }
};
MedicationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof repositories_1.MedicationRepository !== "undefined" && repositories_1.MedicationRepository) === "function" ? _a : Object])
], MedicationService);
exports.MedicationService = MedicationService;


/***/ }),

/***/ "./libs/api-decorators/src/decorators/email.decorator.ts":
/*!***************************************************************!*\
  !*** ./libs/api-decorators/src/decorators/email.decorator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPropertyEmail = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
function ApiPropertyEmail({ isOptional } = {}) {
    const propertyOptions = { type: String, example: 'koko@ko.ko', description: 'Email' };
    return common_1.applyDecorators(...isOptional
        ? [class_validator_1.IsOptional(), swagger_1.ApiPropertyOptional(propertyOptions)]
        : [swagger_1.ApiProperty(propertyOptions)], class_validator_1.IsEmail({}, { message: constants_1.ERRORS.INVALID_EMAIL }), class_validator_1.MaxLength(256, { message: constants_1.ERRORS.TOO_LONG_STRING }));
}
exports.ApiPropertyEmail = ApiPropertyEmail;


/***/ }),

/***/ "./libs/api-decorators/src/decorators/string.decorator.ts":
/*!****************************************************************!*\
  !*** ./libs/api-decorators/src/decorators/string.decorator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiPropertyString = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
function ApiPropertyString({ isOptional, minLength, maxLength, example, pattern } = {}) {
    const propertyOptions = Object.assign(Object.assign(Object.assign({ type: String, example }, (pattern && { pattern: pattern.toString() })), (minLength && { minLength })), (maxLength && { maxLength }));
    return common_1.applyDecorators(...isOptional
        ? [class_validator_1.IsOptional(), swagger_1.ApiPropertyOptional(propertyOptions)]
        : [swagger_1.ApiProperty(propertyOptions)], class_validator_1.IsString(), ...!isNaN(minLength)
        ? [class_validator_1.MinLength(minLength, { message: constants_1.ERRORS.TOO_SHORT_STRING, context: { minLength } })]
        : [], ...!isNaN(maxLength)
        ? [class_validator_1.MaxLength(maxLength, { message: constants_1.ERRORS.TOO_LONG_STRING, context: { maxLength } })]
        : [], ...class_validator_1.isDefined(pattern)
        ? [class_validator_1.Matches(pattern, { message: constants_1.ERRORS.NOT_MATCHES_TO_PATTERN, context: { pattern: pattern.toString() } })]
        : []);
}
exports.ApiPropertyString = ApiPropertyString;


/***/ }),

/***/ "./libs/api-decorators/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-decorators/src/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./decorators/email.decorator */ "./libs/api-decorators/src/decorators/email.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./decorators/string.decorator */ "./libs/api-decorators/src/decorators/string.decorator.ts"), exports);


/***/ }),

/***/ "./libs/auth/src/auth.module.ts":
/*!**************************************!*\
  !*** ./libs/auth/src/auth.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthLibModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const users_repository_1 = __webpack_require__(/*! ./repositories/users.repository */ "./libs/auth/src/repositories/users.repository.ts");
const auth_service_1 = __webpack_require__(/*! ./services/auth.service */ "./libs/auth/src/services/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./libs/auth/src/strategies/jwt.strategy.ts");
let AuthLibModule = class AuthLibModule {
};
AuthLibModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                users_repository_1.UsersRepository,
            ]),
        ],
        controllers: [],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
        ],
        exports: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
        ],
    })
], AuthLibModule);
exports.AuthLibModule = AuthLibModule;


/***/ }),

/***/ "./libs/auth/src/decorators/auth.decorator.ts":
/*!****************************************************!*\
  !*** ./libs/auth/src/decorators/auth.decorator.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
function Auth() {
    return common_1.applyDecorators(common_1.UseGuards(passport_1.AuthGuard('jwt')), swagger_1.ApiCookieAuth(constants_1.COOKIE.ACCESS_TOKEN), swagger_1.ApiBearerAuth(constants_1.COOKIE.ACCESS_TOKEN), swagger_1.ApiUnauthorizedResponse({ description: 'Unauthorized' }));
}
exports.Auth = Auth;


/***/ }),

/***/ "./libs/auth/src/dtos/auth.dtos.ts":
/*!*****************************************!*\
  !*** ./libs/auth/src/dtos/auth.dtos.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignInResponseDTO = exports.SignInBodyDTO = exports.SignUpResponseDTO = exports.SignUpBodyDTO = exports.MeResponseDTO = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const api_decorators_1 = __webpack_require__(/*! @libs/api-decorators */ "./libs/api-decorators/src/index.ts");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
const entities_1 = __webpack_require__(/*! @libs/entities */ "./libs/entities/src/index.ts");
class MeResponseDTO extends entities_1.UserEntity {
}
exports.MeResponseDTO = MeResponseDTO;
class SignUpBodyDTO extends swagger_1.PickType(entities_1.UserEntity, ['password']) {
}
__decorate([
    api_decorators_1.ApiPropertyEmail(),
    __metadata("design:type", String)
], SignUpBodyDTO.prototype, "email", void 0);
__decorate([
    api_decorators_1.ApiPropertyString({ minLength: constants_1.MIN_PASSWORD_LENGTH, maxLength: constants_1.MAX_PASSWORD_LENGTH, pattern: constants_1.PASSWORD_PATTERN }),
    __metadata("design:type", String)
], SignUpBodyDTO.prototype, "password", void 0);
exports.SignUpBodyDTO = SignUpBodyDTO;
class SignUpResponseDTO {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], SignUpResponseDTO.prototype, "accessToken", void 0);
exports.SignUpResponseDTO = SignUpResponseDTO;
class SignInBodyDTO {
}
__decorate([
    api_decorators_1.ApiPropertyEmail(),
    __metadata("design:type", String)
], SignInBodyDTO.prototype, "email", void 0);
__decorate([
    api_decorators_1.ApiPropertyString({ minLength: constants_1.MIN_PASSWORD_LENGTH, maxLength: constants_1.MAX_PASSWORD_LENGTH, pattern: constants_1.PASSWORD_PATTERN }),
    __metadata("design:type", String)
], SignInBodyDTO.prototype, "password", void 0);
exports.SignInBodyDTO = SignInBodyDTO;
class SignInResponseDTO {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], SignInResponseDTO.prototype, "accessToken", void 0);
exports.SignInResponseDTO = SignInResponseDTO;


/***/ }),

/***/ "./libs/auth/src/dtos/request.with.user.dto.ts":
/*!*****************************************************!*\
  !*** ./libs/auth/src/dtos/request.with.user.dto.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/auth/src/helpers/password.helper.ts":
/*!**************************************************!*\
  !*** ./libs/auth/src/helpers/password.helper.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHashByPassword = exports.comparePasswords = void 0;
const bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
exports.comparePasswords = (password, passwordHash) => {
    return password && passwordHash && bcrypt_1.default.compare(password, passwordHash);
};
exports.getHashByPassword = (password) => {
    return bcrypt_1.default.hash(password, constants_1.PASSWORD_SALT_ROUNDS);
};


/***/ }),

/***/ "./libs/auth/src/index.ts":
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.module */ "./libs/auth/src/auth.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./services/auth.service */ "./libs/auth/src/services/auth.service.ts"), exports);
__exportStar(__webpack_require__(/*! ./dtos/auth.dtos */ "./libs/auth/src/dtos/auth.dtos.ts"), exports);
__exportStar(__webpack_require__(/*! ./dtos/request.with.user.dto */ "./libs/auth/src/dtos/request.with.user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./helpers/password.helper */ "./libs/auth/src/helpers/password.helper.ts"), exports);
__exportStar(__webpack_require__(/*! ./decorators/auth.decorator */ "./libs/auth/src/decorators/auth.decorator.ts"), exports);


/***/ }),

/***/ "./libs/auth/src/repositories/users.repository.ts":
/*!********************************************************!*\
  !*** ./libs/auth/src/repositories/users.repository.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! @libs/entities */ "./libs/entities/src/index.ts");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    getUser(conditions) {
        return this.findOne({ where: conditions });
    }
};
UsersRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.UserEntity)
], UsersRepository);
exports.UsersRepository = UsersRepository;


/***/ }),

/***/ "./libs/auth/src/services/auth.service.ts":
/*!************************************************!*\
  !*** ./libs/auth/src/services/auth.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
const password_helper_1 = __webpack_require__(/*! ../helpers/password.helper */ "./libs/auth/src/helpers/password.helper.ts");
const users_repository_1 = __webpack_require__(/*! ../repositories/users.repository */ "./libs/auth/src/repositories/users.repository.ts");
let AuthService = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    getMe(id) {
        return this.getUserOrFail({ id });
    }
    async signUp(signUpBodyDTO) {
        const { email, password } = signUpBodyDTO;
        const userByEmail = await this.usersRepository.getUser({ email });
        if (userByEmail) {
            throw new common_1.BadRequestException([{ field: 'email', message: constants_1.ERRORS.EMAIL_ALREADY_IN_USE }]);
        }
        const passwordHash = await password_helper_1.getHashByPassword(password);
        await this.usersRepository.save({
            email,
            password: passwordHash,
        });
    }
    async signIn(email, password) {
        const user = await this.getUserOrFail({ email });
        const isPasswordCorrect = await password_helper_1.comparePasswords(password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.UnauthorizedException([{ field: 'password', message: constants_1.ERRORS.INVALID_PASSWORD }]);
        }
        return user;
    }
    async getUserOrFail(conditions) {
        const user = await this.usersRepository.getUser(conditions);
        if (!user) {
            throw new common_1.NotFoundException([{ field: '', message: constants_1.ERRORS.USER_NOT_FOUND }]);
        }
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./libs/auth/src/strategies/jwt.strategy.ts":
/*!**************************************************!*\
  !*** ./libs/auth/src/strategies/jwt.strategy.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! config */ "config");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const constants_1 = __webpack_require__(/*! @libs/constants */ "./libs/constants/src/index.ts");
const users_repository_1 = __webpack_require__(/*! ../repositories/users.repository */ "./libs/auth/src/repositories/users.repository.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(userRepository) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (req) => {
                    if (req) {
                        if (req.cookies && req.cookies[constants_1.COOKIE.ACCESS_TOKEN]) {
                            return req.cookies[constants_1.COOKIE.ACCESS_TOKEN];
                        }
                        const tokenHeaderRaw = req.header(constants_1.COOKIE.ACCESS_TOKEN);
                        if (tokenHeaderRaw) {
                            return tokenHeaderRaw.replace('Bearer ', '');
                        }
                    }
                    return null;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: config_1.JWT.SECRET_KEY,
        });
        this.userRepository = userRepository;
    }
    async validate(payload) {
        const user = await this.userRepository.findOne({ where: { id: payload === null || payload === void 0 ? void 0 : payload.id } });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return {
            id: payload.id,
        };
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./libs/constants/src/auth.constants.ts":
/*!**********************************************!*\
  !*** ./libs/constants/src/auth.constants.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COOKIE_SECURE_OPTIONS = exports.PASSWORD_PATTERN = exports.MAX_PASSWORD_LENGTH = exports.MIN_PASSWORD_LENGTH = exports.PASSWORD_SALT_ROUNDS = exports.COOKIE_EXPIRES = exports.COOKIE = void 0;
const config_1 = __webpack_require__(/*! config */ "config");
const ms_1 = __importDefault(__webpack_require__(/*! ms */ "ms"));
exports.COOKIE = {
    ACCESS_TOKEN: 'Authorization',
};
exports.COOKIE_EXPIRES = () => (new Date(Date.now() + ms_1.default(config_1.JWT.EXPIRATION)));
exports.PASSWORD_SALT_ROUNDS = 10;
exports.MIN_PASSWORD_LENGTH = 4;
exports.MAX_PASSWORD_LENGTH = 255;
exports.PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?:&_;-])[A-Za-z\d@$!%*?:&_;-]+$/;
exports.COOKIE_SECURE_OPTIONS = {
    httpOnly: true,
    secure: config_1.COOKIES_OPTIONS.SECURE,
    sameSite: config_1.COOKIES_OPTIONS.SAME_SITE,
};


/***/ }),

/***/ "./libs/constants/src/common.constatns.ts":
/*!************************************************!*\
  !*** ./libs/constants/src/common.constatns.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SORT_DIRECTION = void 0;
var SORT_DIRECTION;
(function (SORT_DIRECTION) {
    SORT_DIRECTION["ASC"] = "ASC";
    SORT_DIRECTION["DESC"] = "DESC";
})(SORT_DIRECTION = exports.SORT_DIRECTION || (exports.SORT_DIRECTION = {}));


/***/ }),

/***/ "./libs/constants/src/errors/base.errors.ts":
/*!**************************************************!*\
  !*** ./libs/constants/src/errors/base.errors.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NOT_MATCHES_TO_PATTERN = exports.TOO_SHORT_STRING = exports.TOO_LONG_STRING = exports.INVALID_EMAIL = void 0;
exports.INVALID_EMAIL = 'INVALID_EMAIL';
exports.TOO_LONG_STRING = 'TOO_LONG_STRING';
exports.TOO_SHORT_STRING = 'TOO_SHORT_STRING';
exports.NOT_MATCHES_TO_PATTERN = 'NOT_MATCHES_TO_PATTERN';


/***/ }),

/***/ "./libs/constants/src/errors/index.ts":
/*!********************************************!*\
  !*** ./libs/constants/src/errors/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./base.errors */ "./libs/constants/src/errors/base.errors.ts"), exports);
__exportStar(__webpack_require__(/*! ./user.errors */ "./libs/constants/src/errors/user.errors.ts"), exports);
__exportStar(__webpack_require__(/*! ./medication.errors */ "./libs/constants/src/errors/medication.errors.ts"), exports);


/***/ }),

/***/ "./libs/constants/src/errors/medication.errors.ts":
/*!********************************************************!*\
  !*** ./libs/constants/src/errors/medication.errors.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DESTINATION_LESS_THEN_COUNT = exports.MEDICATION_NOT_FOUND = void 0;
exports.MEDICATION_NOT_FOUND = 'MEDICATION_NOT_FOUND';
exports.DESTINATION_LESS_THEN_COUNT = 'DESTINATION_LESS_THEN_COUNT';


/***/ }),

/***/ "./libs/constants/src/errors/user.errors.ts":
/*!**************************************************!*\
  !*** ./libs/constants/src/errors/user.errors.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.USER_NOT_FOUND = exports.INVALID_PASSWORD = exports.EMAIL_ALREADY_IN_USE = void 0;
exports.EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE';
exports.INVALID_PASSWORD = 'INVALID_PASSWORD';
exports.USER_NOT_FOUND = 'USER_NOT_FOUND';


/***/ }),

/***/ "./libs/constants/src/index.ts":
/*!*************************************!*\
  !*** ./libs/constants/src/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.constants */ "./libs/constants/src/auth.constants.ts"), exports);
exports.ERRORS = __importStar(__webpack_require__(/*! ./errors */ "./libs/constants/src/errors/index.ts"));


/***/ }),

/***/ "./libs/dtos/src/constructable.dto.ts":
/*!********************************************!*\
  !*** ./libs/dtos/src/constructable.dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstructableDTO = exports.selfConstruct = exports.construct = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
function construct(obj, data) {
    const ctor = obj.constructor;
    const result = class_transformer_1.plainToClass(ctor, data);
    return result;
}
exports.construct = construct;
function selfConstruct(obj, data) {
    Object.assign(obj, construct(obj, data));
}
exports.selfConstruct = selfConstruct;
class ConstructableDTO {
    constructor(body) {
        const result = construct(this, body);
        return result;
    }
}
exports.ConstructableDTO = ConstructableDTO;


/***/ }),

/***/ "./libs/dtos/src/id-param.dto.ts":
/*!***************************************!*\
  !*** ./libs/dtos/src/id-param.dto.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdParamDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class IdParamDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_transformer_1.Type(() => Number),
    class_validator_1.IsInt(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], IdParamDTO.prototype, "id", void 0);
exports.IdParamDTO = IdParamDTO;


/***/ }),

/***/ "./libs/dtos/src/index.ts":
/*!********************************!*\
  !*** ./libs/dtos/src/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./constructable.dto */ "./libs/dtos/src/constructable.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./id-param.dto */ "./libs/dtos/src/id-param.dto.ts"), exports);


/***/ }),

/***/ "./libs/entities/src/base.entity.ts":
/*!******************************************!*\
  !*** ./libs/entities/src/base.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let BaseEntity = class BaseEntity {
    constructor(object) {
        Object.assign(this, class_transformer_1.plainToClass(this.constructor, object, { excludeExtraneousValues: true }));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    swagger_1.ApiProperty(),
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamptz' }),
    class_transformer_1.Expose(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamptz' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "updatedAt", void 0);
BaseEntity = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [typeof (_c = typeof Partial !== "undefined" && Partial) === "function" ? _c : Object])
], BaseEntity);
exports.BaseEntity = BaseEntity;


/***/ }),

/***/ "./libs/entities/src/index.ts":
/*!************************************!*\
  !*** ./libs/entities/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.entity */ "./libs/entities/src/user.entity.ts"), exports);
__exportStar(__webpack_require__(/*! ./medication.entity */ "./libs/entities/src/medication.entity.ts"), exports);


/***/ }),

/***/ "./libs/entities/src/medication.entity.ts":
/*!************************************************!*\
  !*** ./libs/entities/src/medication.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MedicationEntity = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const base_entity_1 = __webpack_require__(/*! ./base.entity */ "./libs/entities/src/base.entity.ts");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./libs/entities/src/user.entity.ts");
let MedicationEntity = class MedicationEntity extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ unique: true }),
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], MedicationEntity.prototype, "name", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], MedicationEntity.prototype, "description", void 0);
__decorate([
    class_transformer_1.Expose(),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "count", void 0);
__decorate([
    class_transformer_1.Expose(),
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "destinationCount", void 0);
__decorate([
    class_transformer_1.Expose(),
    typeorm_1.Column(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], MedicationEntity.prototype, "userId", void 0);
__decorate([
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    class_transformer_1.Type(() => user_entity_1.UserEntity),
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.id),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], MedicationEntity.prototype, "user", void 0);
MedicationEntity = __decorate([
    typeorm_1.Entity({ name: 'medication' })
], MedicationEntity);
exports.MedicationEntity = MedicationEntity;


/***/ }),

/***/ "./libs/entities/src/user.entity.ts":
/*!******************************************!*\
  !*** ./libs/entities/src/user.entity.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const base_entity_1 = __webpack_require__(/*! ./base.entity */ "./libs/entities/src/base.entity.ts");
const medication_entity_1 = __webpack_require__(/*! ./medication.entity */ "./libs/entities/src/medication.entity.ts");
let UserEntity = class UserEntity extends base_entity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column({ unique: true }),
    class_transformer_1.Expose(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    class_transformer_1.Exclude({ toPlainOnly: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => medication_entity_1.MedicationEntity, (medication) => medication.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "medications", void 0);
UserEntity = __decorate([
    typeorm_1.Entity({ name: 'user' })
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./ormconfig.ts":
/*!**********************!*\
  !*** ./ormconfig.ts ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const config_1 = __webpack_require__(/*! config */ "config");
const Entities = __importStar(__webpack_require__(/*! @libs/entities */ "./libs/entities/src/index.ts"));
const entities = Object.values(Entities);
module.exports = {
    type: 'postgres',
    host: config_1.POSTGRES.HOST,
    port: config_1.POSTGRES.PORT,
    username: config_1.POSTGRES.USERNAME,
    password: config_1.POSTGRES.PASSWORD,
    database: config_1.POSTGRES.DB,
    retryAttempts: config_1.POSTGRES.RETRY_ATTEMPTS,
    retryDelay: config_1.POSTGRES.RETRY_DELAY,
    migrationsRun: true,
    entities,
    autoLoadModels: true,
    synchronize: true,
    logger: 'advanced-console',
};


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("config");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"med_tracker","version":"0.0.1","description":"","private":true,"license":"UNLICENSED","scripts":{"prebuild":"rimraf dist","build:all":"concurrently \\"yarn build:api\\"","format":"prettier --write \\"apps/**/*.ts\\" \\"libs/**/*.ts\\"","start:api":"nest start api","start:api:dev":"nest start api --watch","start:api:debug":"nest start api --debug --watch","start:api:prod":"node dist/apps/api/main","build:api":"nest build api","lint":"eslint \\"{src,apps,libs,test}/**/*.ts\\"","lint:fix":"eslint \\"{src,apps,libs,test}/**/*.ts\\" --fix","test":"jest","test:watch":"jest --watch","test:cov":"jest --coverage","test:debug":"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand","test:e2e":"jest --config ./apps/template/test/jest-e2e.json","type-check":"tsc --pretty --noEmit","audit":"audit-ci --config audit-ci.json"},"dependencies":{"@nestjs/common":"^8.0.0","@nestjs/config":"^0.6.1","@nestjs/core":"^8.0.0","@nestjs/jwt":"^8.0.0","@nestjs/passport":"^8.0.1","@nestjs/platform-express":"^8.0.0","@nestjs/swagger":"^5.1.0","@nestjs/typeorm":"^8.0.0","bcrypt":"^5.0.1","class-transformer":"^0.5.1","class-validator":"^0.13.1","config":"^3.3.1","cookie-parser":"^1.4.5","cors":"^2.8.5","moment":"^2.29.3","passport":"^0.4.1","passport-jwt":"^4.0.0","pg":"^8.7.1","rimraf":"^3.0.2","rxjs":"^7","swagger-ui-express":"^4.1.4","typeorm":"^0.2.38","validator":"^13.0.0"},"devDependencies":{"@nestjs/cli":"^8.0.0","@nestjs/schematics":"^8.0.0","@types/express":"^4.17.3","@types/jest":"25.1.4","@types/node":"^13.9.1","@typescript-eslint/eslint-plugin":"^2.23.0","@typescript-eslint/parser":"^2.23.0","audit-ci":"^4.1.0","concurrently":"^6.3.0","eslint":"^6.8.0","eslint-config-prettier":"^6.10.0","eslint-import-resolver-typescript":"^2.5.0","eslint-plugin-import":"^2.24.2","jest":"^25.1.0","lint-staged":"^12.4.1","prettier":"^1.19.1","ts-jest":"25.2.1","ts-loader":"^6.2.1","ts-node":"^8.6.2","tsconfig-paths":"^3.9.0","typescript":"^3.7.4"},"resolutions":{"ansi-regex":"5.0.1","axios":">=0.21.2","express-handlebars":">=5.3.1","follow-redirects":">=1.14.7","lodash":"4.17.21","node-fetch":"2.6.7","node-notifier":">=8.0.1","set-value":">=4.0.1","shelljs":">=0.8.5","url-parse":">=1.5.6","yargs-parser":">=18.1.2","minimist":"^1.2.6"},"jest":{"moduleFileExtensions":["js","json","ts"],"rootDir":".","testRegex":".spec.ts$","transform":{"^.+\\\\.(t|j)s$":"ts-jest"},"coverageDirectory":"./coverage","testEnvironment":"node","roots":["<rootDir>/apps/","<rootDir>/libs/"],"moduleNameMapper":{"@libs/entities/(.*)":"<rootDir>/libs/entities/src/$1","@libs/entities":"<rootDir>/libs/entities/src","@libs/constants/(.*)":"<rootDir>/libs/constants/src/$1","@libs/constants":"<rootDir>/libs/constants/src","^@libs/dtos(|/.*)$":"<rootDir>/libs/dtos/src/$1"}},"lint-staged":{"*.ts":"eslint"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/api/src/main.ts");
/******/ 	
/******/ })()
;