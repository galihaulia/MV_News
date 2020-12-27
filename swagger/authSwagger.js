const tag = 'Auth'
const schema = {
    Login: {
        title: 'User Login',
        properties: {
            email: {
                type: 'string',
            },
            password: {
                type: 'string',
            }
        }
    },
    Register: {
        title: 'User Register',
        properties: {
            firstName: {
                type: 'string'
            },
            lastName: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            }
        }
    }
}

const paths = {
    '/auth/login': {
        post: {
            tags: [tag],
            summary: "Login User",
            description: "This can only be done by registered users.",
            produces: [
                "application/xml",
                "application/json"
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Login"
                        }
                    }
                }
            },
            responses: {}
        }
    },
    '/auth/register': {
        post: {
            tags: [tag],
            summary: "Register User",
            description: "Used for users who will register an account",
            produces: [
                "application/xml",
                "application/json"
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Register"
                        }
                    }
                }
            },
            responses: {} 
        }
    }
}

exports.default = {
    schema,
    paths
}