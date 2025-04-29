export const UserType = {
    id: String,
    email: String,
    firstName: String,
    lastName: String,
    phone: String,
    role: String // 'USER' | 'DOCTOR' | 'ADMIN'
  };
  
  export const DoctorType = {
    ...UserType,
    specialization: String,
    qualifications: String,
    experience: Number,
    consultationFee: Number,
    bio: String
  };
  
  export const AppointmentType = {
    id: String,
    user: UserType,
    doctor: DoctorType,
    scheduledTime: String,
    status: String, // 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'
    notes: String
  };