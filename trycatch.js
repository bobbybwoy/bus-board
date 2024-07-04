try {
    console.log("try block")
    throw "Ooops!"
} catch (err) {
    console.log(err)
    throw "We can't do anything about this"
} finally {
    console.log("we will always do this")
}