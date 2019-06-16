function link(parents, args, context){
    return context.prisma.vote({id : parent.id}).link()
}

function user(parents, args, context){
    return context.prisma.vote({id : parent.id}).user()
}


module.exports = {
    link,
    user,
}