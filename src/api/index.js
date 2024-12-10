import axios from 'axios';

import { API_BASE_URL } from '../config';

export const useCurrentToken = () =>
  // return currentToken;
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTgzNjMxMzQsInVzZXJfbmFtZSI6ImJ2X3JvYmVydGlAb3V0bG9vay5jb20iLCJqdGkiOiJsNEk1a0lCQ01ZcjIzcElKQ3dSNkhuSEZIb0EiLCJjbGllbnRfaWQiOiJ3ZWJwZXJtaXQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.oJJgjKCm165DV7F4ywBNqJ6UTgVIei5hNH5lHUA8Mxg';

export function createApiResponseSuccess(data) {
  return { success: true, data };
}

export function restPostCall(body, path) {
  return axios({
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/${path}`,
    data: body,
  }).then(response => createApiResponseSuccess(response.data));
}

export function restPutCall(body, path) {
  return axios({
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/${path}`,
    data: {
      ...body,
    },
  }).then(response => createApiResponseSuccess(response.data));
}

export function restDeleteCall(path) {
  return axios({
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/${path}`,
  }).then(response => createApiResponseSuccess(response.data));
}

export function restDeleteCallWithBody(data, path) {
  return axios({
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    data,
    url: `${API_BASE_URL}/${path}`,
  }).then(response => createApiResponseSuccess(response.data));
}

export function restGetCall(path) {
  return axios({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/${path}`,
  }).then(response => createApiResponseSuccess(response.data));
}

export function createAudit(audit) {
  return restPostCall(audit, 'audit');
}

export function getUsers() {
  return restGetCall('user');
}

export function getUser(id) {
  return restGetCall(`user/${id}`);
}

export function getUserByEmail(email) {
  return restGetCall(`user/email/${email}`);
}

export function createUser(user) {
  return restPostCall(user, 'user');
}

export function updateUser(user) {
  return restPutCall(user, `user/${user.id}`);
}

export function deleteUser(id) {
  return restDeleteCall(`user/${id}`);
}

export function deleteAllUser(listUser) {
  return restDeleteCallWithBody(listUser, `user/delete-all`);
}

export function getCompanys() {
  return restGetCall('company');
}

export function getCompany(id) {
  return restGetCall(`company/${id}`);
}

export function deleteCompany(id) {
  return restDeleteCall(`company/${id}`);
}

export function inativeCompany(company) {
  return restDeleteCallWithBody(company, `company/inative-entity`);
}

export function excludedCompany(company) {
  return restDeleteCallWithBody(company, `company/excluded-entity`);
}

export function deleteAllCompany(_listCompany) {
  return restDeleteCallWithBody(_listCompany, `company/delete-all`);
}

export function createCompany(company) {
  return restPostCall(company, 'company');
}

export function updateCompany(company) {
  return restPutCall(company, `company/${company.id}`);
}

export function getUFs() {
  return restGetCall('uf');
}

export function getAudit() {
  return restGetCall('audit');
}

export function getAuditByEntityAndEntityId(entity, entityId) {
  return restGetCall(`audit/${entity}/${entityId}`);
}

export function updatePermit(permit) {
  return restPutCall(permit, `permit/${permit.id}`);
}

export function createPermit(permit) {
  return restPostCall(permit, 'permit');
}

export function getPermits() {
  return restGetCall('permit');
}

export function getPermit(id) {
  return restGetCall(`permit/${id}`);
}

export function deletePermit(id) {
  return restDeleteCall(`permit/${id}`);
}

export function deleteAllPermit(listPermit) {
  return restDeleteCallWithBody(listPermit, `permit/delete-all`);
}

// export function getPermitStatus() {
//   return restGetCall("permit-status");
// }

// export function getPermitTypes() {
//   return restGetCall("permit-type");
// }

export function createAttachment(attachment) {
  return restPostCall(attachment, 'attachment');
}
export function updateAttachment(attachment) {
  return restPutCall(attachment, `attachment/${attachment.id}`);
}

export function getAttachments() {
  return restGetCall('attachment');
}

export function getAttachmentsByPermitId(permitId) {
  return restGetCall(`attachment/permit/${permitId}`);
}

export function deleteAttachment(id) {
  return restDeleteCall(`attachment/${id}`);
}

export function deleteAllAttachment(listAttachment) {
  return restDeleteCallWithBody(listAttachment, `attachment/delete-all`);
}

export function updateAccessGroup(accessGroup) {
  return restPutCall(accessGroup, `access-group/${accessGroup.id}`);
}

export function createAccessGroup(accessGroup) {
  return restPostCall(accessGroup, 'access-group');
}

export function getAccessGroups() {
  return restGetCall('access-group');
}

export function getAccessGroup(id) {
  return restGetCall(`access-group/${id}`);
}

export function deleteAccessGroup(id) {
  return restDeleteCall(`access-group/${id}`);
}
export function deleteAllAccessGroup(listAccessGroup) {
  return restDeleteCallWithBody(listAccessGroup, `access-group/delete-all`);
}

export function updateContract(contract) {
  return restPutCall(contract, `contract/${contract.id}`);
}

export function createContract(contract) {
  return restPostCall(contract, 'contract');
}

export function getContracts() {
  return restGetCall('contract');
}

export function getContract(id) {
  return restGetCall(`contract/${id}`);
}

export function deleteContract(id) {
  return restDeleteCall(`contract/${id}`);
}

export function deleteAllContract(listContract) {
  return restDeleteCallWithBody(listContract, `contract/delete-all`);
}

// export function getContractStatus() {
//   return restGetCall("contract-status");
// }

// export function getContractTypes() {
//   return restGetCall("contract-type");
// }

export function createContractAttachment(attachment) {
  return restPostCall(attachment, 'contract-attachment');
}

export function updateContractAttachment(attachment) {
  return restPutCall(attachment, `contract-attachment/${attachment.id}`);
}

export function getContractAttachments() {
  return restGetCall('contract-attachment');
}

export function getContractAttachmentsByContractId(contractId) {
  return restGetCall(`contract-attachment/contract/${contractId}`);
}

export function deleteContractAttachment(id) {
  return restDeleteCall(`contract-attachment/${id}`);
}

export function deleteAllContractAttachment(listAttachment) {
  return restDeleteCallWithBody(
    listAttachment,
    `contract-attachment/delete-all`,
  );
}

export function getPermitTypes() {
  return restGetCall('permit-type');
}

export function getPermitType(id) {
  return restGetCall(`permit-type/${id}`);
}

export function createPermitType(permitType) {
  return restPostCall(permitType, 'permit-type');
}

export function updatePermitType(permitType) {
  return restPutCall(permitType, `permit-type/${permitType.id}`);
}

export function deletePermitType(id) {
  return restDeleteCall(`permit-type/${id}`);
}

export function deleteAllPermitType(listPermitStatus) {
  return restDeleteCallWithBody(listPermitStatus, `permit-type/delete-all`);
}

export function getAllPermitStatus() {
  return restGetCall('permit-status');
}

export function getPermitStatus(id) {
  return restGetCall(`permit-status/${id}`);
}

export function createPermitStatus(permitStatus) {
  return restPostCall(permitStatus, 'permit-status');
}

export function updatePermitStatus(permitStatus) {
  return restPutCall(permitStatus, `permit-status/${permitStatus.id}`);
}

export function deletePermitStatus(id) {
  return restDeleteCall(`permit-status/${id}`);
}

export function getPermitStatusCountByPermit() {
  return restGetCall('permit-status/count-by-permit');
}

export function deleteAllPermitStatus(listPermitStatus) {
  return restDeleteCallWithBody(listPermitStatus, `permit-status/delete-all`);
}

export function getAllContractStatus() {
  return restGetCall('contract-status');
}

export function getContractStatus(id) {
  return restGetCall(`contract-status/${id}`);
}

export function createContractStatus(contractStatus) {
  return restPostCall(contractStatus, 'contract-status');
}

export function updateContractStatus(contractStatus) {
  return restPutCall(contractStatus, `contract-status/${contractStatus.id}`);
}

export function deleteContractStatus(id) {
  return restDeleteCall(`contract-status/${id}`);
}

export function deleteAllContractStatus(listContractStatus) {
  return restDeleteCallWithBody(
    listContractStatus,
    `contract-status/delete-all`,
  );
}

export function getContractTypes() {
  return restGetCall('contract-type');
}

export function getContractType(id) {
  return restGetCall(`contract-type/${id}`);
}

export function createContractType(contractType) {
  return restPostCall(contractType, 'contract-type');
}

export function updateContractType(contractType) {
  return restPutCall(contractType, `contract-type/${contractType.id}`);
}

export function deleteContractType(id) {
  return restDeleteCall(`contract-type/${id}`);
}

export function deleteAllContractType(listContractStatus) {
  return restDeleteCallWithBody(listContractStatus, `contract-type/delete-all`);
}

export function createCompanyAttachment(attachment) {
  return restPostCall(attachment, 'company-attachment');
}

export function updateCompanyAttachment(attachment) {
  return restPutCall(attachment, `company-attachment/${attachment.id}`);
}


export function getCompanyAttachments() {
  return restGetCall('company-attachment');
}

export function getCompanyAttachmentsByCompanyId(companyId) {
  return restGetCall(`company-attachment/company/${companyId}`);
}

export function deleteCompanyAttachment(id) {
  return restDeleteCall(`company-attachment/${id}`);
}

export function deleteAllCompanyAttachment(listAttachment) {
  return restDeleteCallWithBody(
    listAttachment,
    `company-attachment/delete-all`,
  );
}

export function getCompetences() {
  return restGetCall('competence');
}

export function getCompetence(id) {
  return restGetCall(`competence/${id}`);
}

export function deleteCompetence(id) {
  return restDeleteCall(`competence/${id}`);
}

export function deleteAllCompetence(_listCompetence) {
  return restDeleteCallWithBody(_listCompetence, `competence/delete-all`);
}

export function createCompetence(competence) {
  return restPostCall(competence, 'competence');
}

export function updateCompetence(competence) {
  return restPutCall(competence, `competence/${competence.id}`);
}

export function getFiremens() {
  return restGetCall('firemen');
}

export function getFiremen(id) {
  return restGetCall(`firemen/${id}`);
}

export function deleteFiremen(id) {
  return restDeleteCall(`firemen/${id}`);
}

export function deleteAllFiremen(_listFiremen) {
  return restDeleteCallWithBody(_listFiremen, `firemen/delete-all`);
}

export function createFiremen(firemen) {
  return restPostCall(firemen, 'firemen');
}

export function updateFiremen(firemen) {
  return restPutCall(firemen, `firemen/${firemen.id}`);
}

export function createFiremenAttachment(attachment) {
  return restPostCall(attachment, 'firemen-attachment');
}

export function updateFiremenAttachment(attachment) {
  return restPutCall(attachment, `firemen-attachment/${attachment.id}`);
}

export function getFiremenAttachments() {
  return restGetCall('firemen-attachment');
}

export function getFiremenAttachmentsByFiremenId(firemenId) {
  return restGetCall(`firemen-attachment/firemen/${firemenId}`);
}

export function deleteFiremenAttachment(id) {
  return restDeleteCall(`firemen-attachment/${id}`);
}

export function deleteAllFiremenAttachment(listAttachment) {
  return restDeleteCallWithBody(
    listAttachment,
    `firemen-attachment/delete-all`,
  );
}

export function getFiremenTypes() {
  return restGetCall('firemen-type');
}

export function getFiremenType(id) {
  return restGetCall(`firemen-type/${id}`);
}

export function createFiremenType(firemenType) {
  return restPostCall(firemenType, 'firemen-type');
}

export function updateFiremenType(firemenType) {
  return restPutCall(firemenType, `firemen-type/${firemenType.id}`);
}

export function deleteFiremenType(id) {
  return restDeleteCall(`firemen-type/${id}`);
}

export function deleteAllFiremenType(listFiremenStatus) {
  return restDeleteCallWithBody(listFiremenStatus, `firemen-type/delete-all`);
}

export function getAllFiremenStatus() {
  return restGetCall('firemen-status');
}

export function getFiremenStatus(id) {
  return restGetCall(`firemen-status/${id}`);
}

export function createFiremenStatus(firemenStatus) {
  return restPostCall(firemenStatus, 'firemen-status');
}

export function updateFiremenStatus(firemenStatus) {
  return restPutCall(firemenStatus, `firemen-status/${firemenStatus.id}`);
}

export function deleteFiremenStatus(id) {
  return restDeleteCall(`firemen-status/${id}`);
}

export function deleteAllFiremenStatus(listFiremenStatus) {
  return restDeleteCallWithBody(listFiremenStatus, `firemen-status/delete-all`);
}

export function getCustomers() {
  return restGetCall('customer');
}

export function getCustomer(id) {
  return restGetCall(`customer/${id}`);
}

export function deleteCustomer(id) {
  return restDeleteCall(`customer/${id}`);
}

export function deleteAllCustomer(_listCustomer) {
  return restDeleteCallWithBody(_listCustomer, `customer/delete-all`);
}

export function createCustomer(customer) {
  return restPostCall(customer, 'customer');
}

export function updateCustomer(customer) {
  return restPutCall(customer, `customer/${customer.id}`);
}

export function deleteUserXTempCustomerByUserId(id) {
  return restDeleteCall(`userxtempcustomer/user/${id}`);
}

export function createUserXTempCustomer(userXTempCustomer) {
  return restPostCall(userXTempCustomer, 'userxtempcustomer');
}

export function getRegionals() {
  return restGetCall('regional');
}

export function getRegional(id) {
  return restGetCall(`regional/${id}`);
}

export function deleteRegional(id) {
  return restDeleteCall(`regional/${id}`);
}

export function deleteAllRegional(_listRegional) {
  return restDeleteCallWithBody(_listRegional, `regional/delete-all`);
}

export function createRegional(regional) {
  return restPostCall(regional, 'regional');
}

export function updateRegional(regional) {
  return restPutCall(regional, `regional/${regional.id}`);
}

//PermitStatusMGTRule
export function getAllPermitStatusMGTRule() {
  return restGetCall('permit-status-mgt-rule');
}

export function getPermitStatusMGTRule(id) {
  return restGetCall(`permit-status-mgt-rule/${id}`);
}

export function getPermitStatusMGTRuleByPermitStatusId(id) {
  return restGetCall(`permit-status-mgt-rule/permit-status/${id}`);
}

export function getPermitStatusMGTRuleFields() {
  return restGetCall(`permit-status-mgt-rule/fields`);
}

export function getPermitStatusMGTRuleOperators() {
  return restGetCall(`permit-status-mgt-rule/operators`);
}

export function createPermitStatusMGTRule(request) {
  return restPostCall(request, 'permit-status-mgt-rule');
}

export function updatePermitStatusMGTRule(request) {
  return restPutCall(request, `permit-status-mgt-rule/${request.id}`);
}

export function deletePermitStatusMGTRule(id) {
  return restDeleteCall(`permit-status-mgt-rule/${id}`);
}  
export function deleteAllPermitStatusMGTRule(_list) {
  return restDeleteCallWithBody(_list, `permit-status-mgt-rule/delete-all`);
}
export function createCustomerUserAccess(request){
  return restPostCall(request, 'customer-user-access/save-all');
}
export function resetPassword(data) {
  return axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/user-reset/password`,
    data,
  }).then(response => createApiResponseSuccess(response.data));
}

export function newPassword(data) {
  return axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/user-reset/new-password`,
    data,
  }).then(response => createApiResponseSuccess(response.data));
}

export function permitsCloseToExpire() {
  return axios({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    url: `${API_BASE_URL}/permit/verify-permits-renovation`,
  }).then(response => createApiResponseSuccess(response.data));
}
