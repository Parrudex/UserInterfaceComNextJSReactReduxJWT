export const getError = (err, entityName = '') =>{
    let message = `exceptions.${err}`.toLowerCase()
    if(err?.response?.data?.detail)
        message = entityName ? `exceptions.details.${err.response.data.detail}.${entityName}` :  `exceptions.details.${err.response.data.detail}`
    else if(err?.response?.status)
        message = `exceptions.status.${err.response.status}`.toLowerCase()
    else if(err?.code)  
        message = `exceptions.code.${err.code}`.toLowerCase()
    else if(err?.error)  
        message = `exceptions.${err.error}`.replace(/[0-9]/g, '');    
    return message
    .replaceAll(' ','')
    .replaceAll("'",'')
}