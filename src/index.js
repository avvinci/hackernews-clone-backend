const {GraphQLServer} = require('graphql-yoga')

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for graphql'
}]

let idcount = links.length  
const resolvers = {
    Query: {
        info: () =>  `This is the API of a hackernews clone`,
        feed: () => links , 
        // link: (parent, args) => {

        // }
    },

    Mutation: {
        post : (parent,args) => {
            const  link = {
                id: `link-${idcount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },
}



const server = new GraphQLServer({
    typeDefs : './src/schema.graphql',
    resolvers,
})

server.start(() => console.log('Server is running on port 4000'))