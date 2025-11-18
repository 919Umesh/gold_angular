export interface ProfileModel {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  kyc_status: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface ProfileResponse {
  user: ProfileModel;
  message?: string;
}