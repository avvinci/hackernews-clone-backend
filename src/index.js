const {GraphQLServer} = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for graphql'
}]


const resolvers = {
    Query: {
        info: () =>  `This is the API of a hackernews clone`,
        feed: () => links , 
    },

    Link : {
        id : (parent) => parent.id ,
        url : (parent) => parent.url,
        description: (parent) => parent.description,
    }
}



const server = new GraphQLServer({
    typeDefs : './src/schema.grapgql',
    resolvers,
})

server.start(() => console.log('Server is running on port 4000'))