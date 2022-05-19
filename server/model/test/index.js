module.exports = Array.from({ length: 2 }, (_, i) => {
    return {
        user: `user - ${i}`,
        userId: i
    }
})