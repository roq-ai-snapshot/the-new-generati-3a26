interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Registered User'],
  tenantRoles: ['Business Owner', 'Course Creator'],
  tenantName: 'Organization',
  applicationName: 'The New Generation of Im v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
