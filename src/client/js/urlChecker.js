function checkUrl(inputText) {
    // solution taken from https://stackoverflow.com/a/49283749
    try {
       return Boolean(new URL(inputText));
    } catch(error) {
        return false;
    }
}

export { checkUrl }
