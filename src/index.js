const {GraphQLServer} = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')



const resolvers = {
    Query: {
        info: () =>  `This is the API of a hackernews clone`,
        feed: (root, args, context, info) => {
            return context.prisma.links()
        } , 
        // link: (parent, args) => {

        // }
    },

    Mutation: {
        post : (root,args, context) => {    
            return context.prisma.createLink({
                url: args.url,
                description:args.description,
            })
        },
    },
}



const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers,
    context : {prisma},
})

server.start(() => console.log('Server is running on port 4000'))