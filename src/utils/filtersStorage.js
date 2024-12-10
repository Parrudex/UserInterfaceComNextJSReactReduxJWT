class FilterStorage {
    #getKey;
    #WEB_PERMIT;

    constructor(){
        this.#WEB_PERMIT = 'WEB_PERMIT'
        this.#getKey = (entityName, field) => {
            return `${this.#WEB_PERMIT}_FILTERS_@${entityName}@${field}`
        }
    }

    setItem(entityName, field, value){
        localStorage.setItem(this.#getKey(entityName, field), value)
    }

    getItem(entityName, field){
         return localStorage.getItem(this.#getKey(entityName,field))
    }

}

export default FilterStorage;