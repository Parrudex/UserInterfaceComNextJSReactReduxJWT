const cnpj = {
    getMask: cnpj => !cnpj ? '' : `${cnpj.substring(0,2)}.${cnpj.substring(2,5)}.${cnpj.substring(5,8)}/${cnpj.substring(8,12)}-${cnpj.substring(12,14)}`,
    removeMask: cnpj => !cnpj ? '' : cnpj.replace('.','').replace('-','')
} 

export const MaskUtils = {
cnpj
}
