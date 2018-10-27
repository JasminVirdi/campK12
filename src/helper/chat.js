export default calculateSize = (obj) => {
    const text = obj.text
    if (text.length > 25) {
        obj.width = (text.length) * (textSize - 5)
    } else {
        obj.width = (text.length) * (textSize) + 10
    }
    console.log(obj.text, obj.width, text.length, textSize)
}