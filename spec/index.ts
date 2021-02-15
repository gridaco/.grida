/**
 * Mostly following https://docs.npmjs.com/cli/v7/configuring-npm/package-json
 */
interface Project {
    name: string
    license: string
    homepage: string
}

interface Repository {
}

/**
 * this holds the UI components, screens configuration inside the repository.
 */
interface UI {
    components: {}
}

/**
 * this holds the used cloud services, and the configurations linked data.
 */
interface Services {

}