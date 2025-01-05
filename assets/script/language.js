let language = (navigator.language || navigator.browserLanguage).substring(0, 2)

if (!['ru', 'en'].includes(language)) {
    language = 'ru'
}

if (language !== "ru") {
    const pathname = window.location.pathname
    const langSpecified = /^(\/..\/)/.test(pathname)

    if (!langSpecified) {
        window.location.pathname = `/${language}` + pathname
    }
}

