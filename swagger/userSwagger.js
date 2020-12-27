const tag = 'User'
const schema = {
    News: {
        title: 'News',
        properties: {
            title: {
                type: 'string',
            },
            contents: {
                type: 'string',
            }
        }
    },
}

const paths = {
    '/user/details': {
        get:{
            tags: [tag],
            summary: "Get Detailed User Info",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        }
    },
    '/user/news': {
        get:{
            tags: [tag],
            summary: "Get All The News",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        }
    },
    '/user/news/detail/{newsId}': {
        get:{
            tags: [tag],
            summary: "Get Detailed News Info",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        },
        parameters: [{
            name: "newsId",
            in: "path",
            description: "ID of news to return",
            required: true,
            type: "string"
        }]
    },
    '/user/create/news': {
        post: {
            tags: [tag],
            summary: "Create User News Logged In",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            requestBody: {
                content: {
                    'application/json': {
                        schema: {
                            $ref: "#/components/schemas/News"
                        }
                    }
                }
            },
            responses: {}
        }
    },
    '/user/show/news': {
        get:{
            tags: [tag],
            summary: "Get Incoming User News",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        }
    },
    '/user/edit/news/{newsId}': {
        put:{
            tags: [tag],
            summary: "Update User News Logged In",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        },
        parameters: [
            {
                name: "newsId",
                in: "path",
                description: "ID of news to return",
                required: true,
                type: "string"
            },
            {
                in: "body",
                name: "body",
                description: "Updated user object",
                required: true,
                schema: {
                  $ref: "#/components/schemas/News"
                }
              }
        ],
        responses: {}
    },
    '/user/delete/news/{newsId}': {
        delete:{
            tags: [tag],
            summary: "Delete Login User News",
            description: "This can only be done by the logged in user.",
            produces: [
                "application/xml",
                "application/json"
            ],
            responses: {}
        },
        parameters: [
            {
                name: "newsId",
                in: "path",
                description: "ID of news to return",
                required: true,
                type: "string"
            },
        ],
        responses: {}
    },
}

exports.default = {
    schema,
    paths
}