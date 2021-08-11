const myFilter = (arr, template) => {
    let templateKeys = Object.keys(template);
    let templateMatches = arr.filter(function (e) {
        let counter = 0;
        for (key of templateKeys) {
            if (e[key] === template[key]) {
                counter += 1;
            }
        }
        if (counter === templateKeys.length) {
            return e;
        }
    })

    return templateMatches;
}
