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
        },
        required: ['email', 'password'],
    },
    Token: {
        title: 'Token',
        properties: {
            token: {
                type: 'string'
            }
        }
    },
    Register: {
        title: 'Register',
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
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Login"
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'User Login',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: "#/components/schemas/Token"
                            }
                        }
                    }
                }
            }
        }
    },
    '/auth/register': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/Register"
                        }
                    }
                }
            },
            responses: {
            } 
        }
    }
}

exports.default = {
    schema,
    paths
}