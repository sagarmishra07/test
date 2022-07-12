import {
  ITenant_Admin_Staff,
  ITenant_Admin_StaffDTO
} from 'src/utils/models/interfaces/Management/tenants_Admin_Staff';

export const managementDTO = {
  create: (data: ITenant_Admin_Staff) => ({
    fullName: data.fullName,
    createdAt: data.createdAt,
    category: data.category,
    propertyId: data.propertyId,
    monthlyRent: data.monthlyRent,
    meterStatus: data.meterStatus,
    phoneNumber: data.phoneNumber
  }),
  send: (data: ITenant_Admin_Staff): ITenant_Admin_Staff => ({
    id: data.id,
    fullName: data.fullName,
    createdAt: data.createdAt,
    category: data.category,
    propertyId: data.propertyId,
    monthlyRent: data.monthlyRent,
    meterStatus: data.meterStatus,
    phoneNumber: data.phoneNumber
  }
  ),
  receive: (data: ITenant_Admin_StaffDTO): ITenant_Admin_Staff => ({
    id: data.id,
    fullName: data.fullName,
    createdAt: data.createdAt,
    category: data.category,
    propertyId: data.propertyId,
    monthlyRent: data.monthlyRent,
    meterStatus: data.meterStatus,
    phoneNumber: data.phoneNumber
  })
};
