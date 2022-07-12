export interface ITenant_Admin_Staff {
  id: number;
  fullName: string;
  createdAt: Date;
  category: string;
  propertyId: number;
  monthlyRent: number;
  meterStatus: string;
  phoneNumber: string;
}

export interface ITenant_Admin_StaffDTO {
  id: number;
  fullName: string;
  createdAt: Date;
  category: string;
  propertyId: number;
  monthlyRent: number;
  meterStatus: string;
  phoneNumber: string;
}

export const iTenant_Admin_Staff: ITenant_Admin_Staff = {
  id: 0,
  fullName: '',
  createdAt: new Date(),
  category: '',
  propertyId: 0,
  monthlyRent: 0,
  meterStatus: '',
  phoneNumber: ''
};
