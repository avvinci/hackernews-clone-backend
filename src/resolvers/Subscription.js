function newLinkSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.link({mutation_in : ['CREATESD'] }).node()
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolver : payload => {
        return payload
    },
}

module.exports = {
    newLink,
}