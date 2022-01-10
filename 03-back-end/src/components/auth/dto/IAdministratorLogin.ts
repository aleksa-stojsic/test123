import Ajv from "ajv";

interface IAdministratorLogin {
    username: string;
    password: string;
}

const ajv = new Ajv();

const IAdministratorLoginValidator = ajv.compile({
    type: "object",
    properties: {
        username: {
            type: "string",
            minLength: 8,
            maxLength: 255,
        },
        password: {
            type: "string",
            minLength: 6,
            maxLength: 255,
        },
    },
    required: [
        "username",
        "password",
    ],
    additionalProperties: false,
});

export { IAdministratorLogin };
export { IAdministratorLoginValidator };